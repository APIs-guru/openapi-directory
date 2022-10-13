package operations

type GetPatientsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetPatientsIDRequest struct {
	PathParams  GetPatientsIDPathParams
	QueryParams GetPatientsIDQueryParams
}

type GetPatientsIDResponse struct {
	ContentType                        string
	GetPatientsID200ApplicationJSONAny *interface{}
	StatusCode                         int64
}
