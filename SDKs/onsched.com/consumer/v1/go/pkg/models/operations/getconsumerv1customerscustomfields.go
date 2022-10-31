package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1CustomersCustomfieldsQueryParams struct {
	LeadQuestions *bool   `queryParam:"style=form,explode=true,name=leadQuestions"`
	LocationID    *string `queryParam:"style=form,explode=true,name=locationId"`
}

type GetConsumerV1CustomersCustomfieldsRequest struct {
	QueryParams GetConsumerV1CustomersCustomfieldsQueryParams
}

type GetConsumerV1CustomersCustomfieldsResponse struct {
	ContentType                        string
	CustomFieldDefinitionListViewModel *shared.CustomFieldDefinitionListViewModel
	StatusCode                         int64
}
