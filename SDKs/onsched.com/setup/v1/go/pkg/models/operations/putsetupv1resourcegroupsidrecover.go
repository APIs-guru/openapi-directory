package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcegroupsIDRecoverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcegroupsIDRecoverRequest struct {
	PathParams PutSetupV1ResourcegroupsIDRecoverPathParams
}

type PutSetupV1ResourcegroupsIDRecoverResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
