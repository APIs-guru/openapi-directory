package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ServicesBlocksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ServicesBlocksIDRequest struct {
	PathParams GetSetupV1ServicesBlocksIDPathParams
}

type GetSetupV1ServicesBlocksIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
