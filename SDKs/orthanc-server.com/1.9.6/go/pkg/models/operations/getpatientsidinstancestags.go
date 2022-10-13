package operations

type GetPatientsIDInstancesTagsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDInstancesTagsQueryParams struct {
	IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
	Short        *bool    `queryParam:"style=form,explode=true,name=short"`
	Simplify     *bool    `queryParam:"style=form,explode=true,name=simplify"`
}

type GetPatientsIDInstancesTagsRequest struct {
	PathParams  GetPatientsIDInstancesTagsPathParams
	QueryParams GetPatientsIDInstancesTagsQueryParams
}

type GetPatientsIDInstancesTagsResponse struct {
	ContentType                                     string
	GetPatientsIDInstancesTags200ApplicationJSONAny *interface{}
	StatusCode                                      int64
}
