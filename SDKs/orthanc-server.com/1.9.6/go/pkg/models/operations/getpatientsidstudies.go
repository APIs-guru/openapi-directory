package operations

type GetPatientsIDStudiesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDStudiesQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetPatientsIDStudiesRequest struct {
	PathParams  GetPatientsIDStudiesPathParams
	QueryParams GetPatientsIDStudiesQueryParams
}

type GetPatientsIDStudiesResponse struct {
	ContentType                               string
	GetPatientsIDStudies200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
