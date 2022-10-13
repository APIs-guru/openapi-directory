package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1ServicesBlockIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1ServicesBlockIDRequest struct {
	PathParams DeleteSetupV1ServicesBlockIDPathParams
}

type DeleteSetupV1ServicesBlockIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
