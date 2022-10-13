package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1CustomersStatesQueryParams struct {
	Country *string `queryParam:"style=form,explode=true,name=country"`
}

type GetConsumerV1CustomersStatesRequest struct {
	QueryParams GetConsumerV1CustomersStatesQueryParams
}

type GetConsumerV1CustomersStatesResponse struct {
	ContentType     string
	StateViewModels []shared.StateViewModel
	StatusCode      int64
}
