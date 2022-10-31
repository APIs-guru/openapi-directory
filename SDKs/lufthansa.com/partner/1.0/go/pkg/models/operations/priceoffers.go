package operations

import (
	"openapi/pkg/models/shared"
)

type PriceOffersPathParams struct {
	Destination string `pathParam:"style=simple,explode=false,name=destination"`
	Origin      string `pathParam:"style=simple,explode=false,name=origin"`
}

type PriceOffersQueryParams struct {
	DepartureDate string  `queryParam:"style=form,explode=true,name=departureDate"`
	ReturnDate    string  `queryParam:"style=form,explode=true,name=returnDate"`
	Service       *string `queryParam:"style=form,explode=true,name=service"`
}

type PriceOffersSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type PriceOffersRequest struct {
	PathParams  PriceOffersPathParams
	QueryParams PriceOffersQueryParams
	Security    PriceOffersSecurity
}

type PriceOffersResponse struct {
	ContentType                         string
	PriceOffers200ApplicationJSONString *string
	StatusCode                          int64
}
