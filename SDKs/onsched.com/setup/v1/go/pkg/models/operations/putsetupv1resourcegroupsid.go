package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcegroupsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcegroupsIDRequests struct {
	ResourceGroupUpdateModel  *shared.ResourceGroupUpdateModel `request:"mediaType=application/*+json"`
	ResourceGroupUpdateModel1 *shared.ResourceGroupUpdateModel `request:"mediaType=application/json"`
	ResourceGroupUpdateModel2 *shared.ResourceGroupUpdateModel `request:"mediaType=application/json-patch+json"`
	ResourceGroupUpdateModel3 *shared.ResourceGroupUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ResourcegroupsIDRequest struct {
	PathParams PutSetupV1ResourcegroupsIDPathParams
	Request    *PutSetupV1ResourcegroupsIDRequests
}

type PutSetupV1ResourcegroupsIDResponse struct {
	ContentType            string
	ResourceGroupViewModel *shared.ResourceGroupViewModel
	StatusCode             int64
}
