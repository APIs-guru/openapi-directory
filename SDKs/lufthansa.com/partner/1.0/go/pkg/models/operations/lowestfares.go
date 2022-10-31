package operations

import (
	"openapi/pkg/models/shared"
)

type LowestFaresQueryParams struct {
	CabinClass  *string `queryParam:"style=form,explode=true,name=cabin-class"`
	Catalogues  string  `queryParam:"style=form,explode=true,name=catalogues"`
	Country     *string `queryParam:"style=form,explode=true,name=country"`
	Destination string  `queryParam:"style=form,explode=true,name=destination"`
	FareFamily  *string `queryParam:"style=form,explode=true,name=fare-family"`
	Origin      string  `queryParam:"style=form,explode=true,name=origin"`
	ReturnDate  *string `queryParam:"style=form,explode=true,name=return-date"`
	TravelDate  string  `queryParam:"style=form,explode=true,name=travel-date"`
	Travelers   *string `queryParam:"style=form,explode=true,name=travelers"`
}

type LowestFaresHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type LowestFaresSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type LowestFaresRequest struct {
	QueryParams LowestFaresQueryParams
	Headers     LowestFaresHeaders
	Security    LowestFaresSecurity
}

type LowestFaresResponse struct {
	ContentType                         string
	LowestFares200ApplicationJSONString *string
	StatusCode                          int64
}
