package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1ResourcegroupsRequests struct {
	ResourceGroupInputModel  *shared.ResourceGroupInputModel `request:"mediaType=application/*+json"`
	ResourceGroupInputModel1 *shared.ResourceGroupInputModel `request:"mediaType=application/json"`
	ResourceGroupInputModel2 *shared.ResourceGroupInputModel `request:"mediaType=application/json-patch+json"`
	ResourceGroupInputModel3 *shared.ResourceGroupInputModel `request:"mediaType=text/json"`
}

type PostSetupV1ResourcegroupsRequest struct {
	Request *PostSetupV1ResourcegroupsRequests
}

type PostSetupV1ResourcegroupsResponse struct {
	ContentType            string
	ResourceGroupViewModel *shared.ResourceGroupViewModel
	StatusCode             int64
}
