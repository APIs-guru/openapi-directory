package operations

type GetPatientsIDSharedTagsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDSharedTagsQueryParams struct {
	Short    *bool `queryParam:"style=form,explode=true,name=short"`
	Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
}

type GetPatientsIDSharedTagsRequest struct {
	PathParams  GetPatientsIDSharedTagsPathParams
	QueryParams GetPatientsIDSharedTagsQueryParams
}

type GetPatientsIDSharedTagsResponse struct {
	ContentType                                  string
	GetPatientsIDSharedTags200ApplicationJSONAny *interface{}
	StatusCode                                   int64
}
