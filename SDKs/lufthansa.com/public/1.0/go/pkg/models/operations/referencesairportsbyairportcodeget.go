package operations

import (
	"openapi/pkg/models/shared"
)

type ReferencesAirportsByAirportCodeGetPathParams struct {
	AirportCode string `pathParam:"style=simple,explode=false,name=airportCode"`
}

type ReferencesAirportsByAirportCodeGetQueryParams struct {
	LHoperated *bool   `queryParam:"style=form,explode=true,name=LHoperated"`
	Lang       *string `queryParam:"style=form,explode=true,name=lang"`
	Limit      *string `queryParam:"style=form,explode=true,name=limit"`
	Offset     *string `queryParam:"style=form,explode=true,name=offset"`
}

type ReferencesAirportsByAirportCodeGetHeaders struct {
	Accept string `header:"name=Accept"`
}

type ReferencesAirportsByAirportCodeGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type ReferencesAirportsByAirportCodeGetRequest struct {
	PathParams  ReferencesAirportsByAirportCodeGetPathParams
	QueryParams ReferencesAirportsByAirportCodeGetQueryParams
	Headers     ReferencesAirportsByAirportCodeGetHeaders
	Security    ReferencesAirportsByAirportCodeGetSecurity
}

type ReferencesAirportsByAirportCodeGetResponse struct {
	AirportResponse *shared.AirportResponse
	ContentType     string
	StatusCode      int64
}
