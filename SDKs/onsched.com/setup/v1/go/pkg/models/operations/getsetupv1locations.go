package operations

type GetSetupV1LocationsQueryParams struct {
	Deleted   *bool   `queryParam:"style=form,explode=true,name=deleted"`
	Limit     *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name      *string `queryParam:"style=form,explode=true,name=name"`
	Offset    *int32  `queryParam:"style=form,explode=true,name=offset"`
	ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
}

type GetSetupV1LocationsRequest struct {
	QueryParams GetSetupV1LocationsQueryParams
}

type GetSetupV1LocationsResponse struct {
	ContentType           string
	LocationListViewModel map[string]interface{}
	StatusCode            int64
}
