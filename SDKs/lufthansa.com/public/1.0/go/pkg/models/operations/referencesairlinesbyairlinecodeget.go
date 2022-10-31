package operations

import (
	"openapi/pkg/models/shared"
)

type ReferencesAirlinesByAirlineCodeGetPathParams struct {
	AirlineCode string `pathParam:"style=simple,explode=false,name=airlineCode"`
}

type ReferencesAirlinesByAirlineCodeGetQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type ReferencesAirlinesByAirlineCodeGetHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type ReferencesAirlinesByAirlineCodeGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type ReferencesAirlinesByAirlineCodeGetRequest struct {
	PathParams  ReferencesAirlinesByAirlineCodeGetPathParams
	QueryParams ReferencesAirlinesByAirlineCodeGetQueryParams
	Headers     ReferencesAirlinesByAirlineCodeGetHeaders
	Security    ReferencesAirlinesByAirlineCodeGetSecurity
}

type ReferencesAirlinesByAirlineCodeGetResponse struct {
	ContentType                                                string
	ReferencesAirlinesByAirlineCodeGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                 int64
}
