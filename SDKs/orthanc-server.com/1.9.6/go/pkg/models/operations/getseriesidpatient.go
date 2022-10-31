package operations

type GetSeriesIDPatientPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeriesIDPatientQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetSeriesIDPatientRequest struct {
	PathParams  GetSeriesIDPatientPathParams
	QueryParams GetSeriesIDPatientQueryParams
}

type GetSeriesIDPatientResponse struct {
	ContentType                             string
	GetSeriesIDPatient200ApplicationJSONAny *interface{}
	StatusCode                              int64
}
