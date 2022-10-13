package operations

import (
	"openapi/pkg/models/shared"
)

type PostConsumerV1CustomersRequests struct {
	CustomerInputModel  *shared.CustomerInputModel `request:"mediaType=application/*+json"`
	CustomerInputModel1 *shared.CustomerInputModel `request:"mediaType=application/json"`
	CustomerInputModel2 *shared.CustomerInputModel `request:"mediaType=application/json-patch+json"`
	CustomerInputModel3 *shared.CustomerInputModel `request:"mediaType=text/json"`
}

type PostConsumerV1CustomersRequest struct {
	Request *PostConsumerV1CustomersRequests
}

type PostConsumerV1CustomersResponse struct {
	ContentType       string
	CustomerViewModel *shared.CustomerViewModel
	StatusCode        int64
}
