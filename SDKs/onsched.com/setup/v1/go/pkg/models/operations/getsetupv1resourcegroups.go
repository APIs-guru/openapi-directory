package operations

type GetSetupV1ResourcegroupsQueryParams struct {
	Deleted    *bool   `queryParam:"style=form,explode=true,name=deleted"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1ResourcegroupsRequest struct {
	QueryParams GetSetupV1ResourcegroupsQueryParams
}

type GetSetupV1ResourcegroupsResponse struct {
	ContentType                string
	ResourceGroupListViewModel map[string]interface{}
	StatusCode                 int64
}
