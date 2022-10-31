package operations

type GetConsumerV1CustomersPlansQueryParams struct {
	GroupID    *string `queryParam:"style=form,explode=true,name=groupId"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type GetConsumerV1CustomersPlansRequest struct {
	QueryParams GetConsumerV1CustomersPlansQueryParams
}

type GetConsumerV1CustomersPlansResponse struct {
	ContentType               string
	CustomerPlanListViewModel map[string]interface{}
	StatusCode                int64
}
