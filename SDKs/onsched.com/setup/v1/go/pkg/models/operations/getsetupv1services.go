package operations

type GetSetupV1ServicesQueryParams struct {
	Deleted        *bool   `queryParam:"style=form,explode=true,name=deleted"`
	Limit          *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID     *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset         *int32  `queryParam:"style=form,explode=true,name=offset"`
	ServiceGroupID *int32  `queryParam:"style=form,explode=true,name=serviceGroupId"`
}

type GetSetupV1ServicesRequest struct {
	QueryParams GetSetupV1ServicesQueryParams
}

type GetSetupV1ServicesResponse struct {
	ContentType          string
	ServiceListViewModel map[string]interface{}
	StatusCode           int64
}
