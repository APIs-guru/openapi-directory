package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1ResourcesAllocationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1ResourcesAllocationsIDRequest struct {
	PathParams DeleteSetupV1ResourcesAllocationsIDPathParams
}

type DeleteSetupV1ResourcesAllocationsIDResponse struct {
	ContentType            string
	ResourceBlockViewModel *shared.ResourceBlockViewModel
	StatusCode             int64
}
