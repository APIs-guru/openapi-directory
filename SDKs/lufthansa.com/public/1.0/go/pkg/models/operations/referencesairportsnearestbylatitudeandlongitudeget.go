package operations

import (
	"openapi/pkg/models/shared"
)

type ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams struct {
	Latitude  int32 `pathParam:"style=simple,explode=false,name=latitude"`
	Longitude int32 `pathParam:"style=simple,explode=false,name=longitude"`
}

type ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders struct {
	Accept string `header:"name=Accept"`
}

type ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest struct {
	PathParams  ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams
	QueryParams ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams
	Headers     ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders
	Security    ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity
}

type ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse struct {
	ContentType                                                                string
	ReferencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                                 int64
}
