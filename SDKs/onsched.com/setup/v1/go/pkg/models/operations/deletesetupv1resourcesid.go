package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1ResourcesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1ResourcesIDRequest struct {
	PathParams DeleteSetupV1ResourcesIDPathParams
}

type DeleteSetupV1ResourcesIDResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
