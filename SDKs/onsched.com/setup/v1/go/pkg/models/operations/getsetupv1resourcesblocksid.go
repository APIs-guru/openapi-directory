package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1ResourcesBlocksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ResourcesBlocksIDRequest struct {
	PathParams GetSetupV1ResourcesBlocksIDPathParams
}

type GetSetupV1ResourcesBlocksIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
