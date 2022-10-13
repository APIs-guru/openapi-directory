package operations

import (
	"openapi/pkg/models/shared"
)

type LhDeepLinksItcoQueryParams struct {
	CabinClass       *string `queryParam:"style=form,explode=true,name=cabin-class"`
	Catalogues       string  `queryParam:"style=form,explode=true,name=catalogues"`
	Country          string  `queryParam:"style=form,explode=true,name=country"`
	Destination      string  `queryParam:"style=form,explode=true,name=destination"`
	EncryptionKey    *string `queryParam:"style=form,explode=true,name=encryption-key"`
	Fare             string  `queryParam:"style=form,explode=true,name=fare"`
	FareCurrency     string  `queryParam:"style=form,explode=true,name=fare-currency"`
	Lang             string  `queryParam:"style=form,explode=true,name=lang"`
	NetFare          *string `queryParam:"style=form,explode=true,name=net-fare"`
	Origin           string  `queryParam:"style=form,explode=true,name=origin"`
	OutboundSegments string  `queryParam:"style=form,explode=true,name=outbound-segments"`
	Partnerid        *string `queryParam:"style=form,explode=true,name=partnerid"`
	ReturnDate       *string `queryParam:"style=form,explode=true,name=return-date"`
	ReturnSegments   *string `queryParam:"style=form,explode=true,name=return-segments"`
	Trackingid       string  `queryParam:"style=form,explode=true,name=trackingid"`
	TravelDate       string  `queryParam:"style=form,explode=true,name=travel-date"`
	Travelers        *string `queryParam:"style=form,explode=true,name=travelers"`
}

type LhDeepLinksItcoHeaders struct {
	Accept string `header:"name=Accept"`
}

type LhDeepLinksItcoSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type LhDeepLinksItcoRequest struct {
	QueryParams LhDeepLinksItcoQueryParams
	Headers     LhDeepLinksItcoHeaders
	Security    LhDeepLinksItcoSecurity
}

type LhDeepLinksItcoResponse struct {
	ContentType                             string
	LhDeepLinksItco200ApplicationJSONString *string
	StatusCode                              int64
}
