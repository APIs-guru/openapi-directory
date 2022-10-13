package operations

type GetStudiesIDInstancesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudiesIDInstancesQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetStudiesIDInstancesRequest struct {
	PathParams  GetStudiesIDInstancesPathParams
	QueryParams GetStudiesIDInstancesQueryParams
}

type GetStudiesIDInstancesResponse struct {
	ContentType                                string
	GetStudiesIDInstances200ApplicationJSONAny *interface{}
	StatusCode                                 int64
}
