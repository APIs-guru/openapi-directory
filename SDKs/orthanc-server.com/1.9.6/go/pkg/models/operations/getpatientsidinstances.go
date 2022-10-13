package operations

type GetPatientsIDInstancesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDInstancesQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetPatientsIDInstancesRequest struct {
	PathParams  GetPatientsIDInstancesPathParams
	QueryParams GetPatientsIDInstancesQueryParams
}

type GetPatientsIDInstancesResponse struct {
	ContentType                                 string
	GetPatientsIDInstances200ApplicationJSONAny *interface{}
	StatusCode                                  int64
}
