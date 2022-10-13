package operations

import (
	"openapi/pkg/models/shared"
)

type BestFaresQueryParams struct {
	CabinClass   *string `queryParam:"style=form,explode=true,name=cabin-class"`
	Catalogues   string  `queryParam:"style=form,explode=true,name=catalogues"`
	Country      *string `queryParam:"style=form,explode=true,name=country"`
	Destination  string  `queryParam:"style=form,explode=true,name=destination"`
	FareFamily   *string `queryParam:"style=form,explode=true,name=fare-family"`
	Origin       string  `queryParam:"style=form,explode=true,name=origin"`
	Range        string  `queryParam:"style=form,explode=true,name=range"`
	Trackingid   *string `queryParam:"style=form,explode=true,name=trackingid"`
	TravelDate   string  `queryParam:"style=form,explode=true,name=travel-date"`
	TripDuration string  `queryParam:"style=form,explode=true,name=trip-duration"`
}

type BestFaresHeaders struct {
	Accept string `header:"name=Accept"`
}

type BestFaresSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type BestFaresRequest struct {
	QueryParams BestFaresQueryParams
	Headers     BestFaresHeaders
	Security    BestFaresSecurity
}

type BestFaresResponse struct {
	BestFares200ApplicationJSONString *string
	ContentType                       string
	StatusCode                        int64
}
