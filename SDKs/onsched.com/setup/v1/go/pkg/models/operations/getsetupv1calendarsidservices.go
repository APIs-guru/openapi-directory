package operations

type GetSetupV1CalendarsIDServicesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1CalendarsIDServicesQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetSetupV1CalendarsIDServicesRequest struct {
	PathParams  GetSetupV1CalendarsIDServicesPathParams
	QueryParams GetSetupV1CalendarsIDServicesQueryParams
}

type GetSetupV1CalendarsIDServicesResponse struct {
	ContentType          string
	ServiceListViewModel map[string]interface{}
	StatusCode           int64
}
