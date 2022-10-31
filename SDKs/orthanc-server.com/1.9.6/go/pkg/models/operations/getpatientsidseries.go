package operations

type GetPatientsIDSeriesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDSeriesQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetPatientsIDSeriesRequest struct {
	PathParams  GetPatientsIDSeriesPathParams
	QueryParams GetPatientsIDSeriesQueryParams
}

type GetPatientsIDSeriesResponse struct {
	ContentType                              string
	GetPatientsIDSeries200ApplicationJSONAny *interface{}
	StatusCode                               int64
}
