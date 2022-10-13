package operations

type GetConsumerV1CustomersSubscriptionsQueryParams struct {
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type GetConsumerV1CustomersSubscriptionsRequest struct {
	QueryParams GetConsumerV1CustomersSubscriptionsQueryParams
}

type GetConsumerV1CustomersSubscriptionsResponse struct {
	ContentType                       string
	CustomerSubscriptionListViewModel map[string]interface{}
	StatusCode                        int64
}
