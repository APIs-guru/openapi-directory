package operations

type GetConsumerV1ServicesIDResourcesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1ServicesIDResourcesQueryParams struct {
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type GetConsumerV1ServicesIDResourcesRequest struct {
	PathParams  GetConsumerV1ServicesIDResourcesPathParams
	QueryParams GetConsumerV1ServicesIDResourcesQueryParams
}

type GetConsumerV1ServicesIDResourcesResponse struct {
	ContentType           string
	ResourceListViewModel map[string]interface{}
	StatusCode            int64
}
