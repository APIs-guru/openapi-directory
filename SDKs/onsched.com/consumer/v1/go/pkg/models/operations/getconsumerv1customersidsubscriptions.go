package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1CustomersIDSubscriptionsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1CustomersIDSubscriptionsRequest struct {
	PathParams GetConsumerV1CustomersIDSubscriptionsPathParams
}

type GetConsumerV1CustomersIDSubscriptionsResponse struct {
	ContentType                   string
	CustomerSubscriptionViewModel *shared.CustomerSubscriptionViewModel
	StatusCode                    int64
}
