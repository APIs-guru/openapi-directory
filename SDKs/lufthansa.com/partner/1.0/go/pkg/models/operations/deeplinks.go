package operations

import (
	"openapi/pkg/models/shared"
)

type DeepLinksQueryParams struct {
	CabinClass       *string `queryParam:"style=form,explode=true,name=cabin-class"`
	Catalogues       string  `queryParam:"style=form,explode=true,name=catalogues"`
	Country          string  `queryParam:"style=form,explode=true,name=country"`
	Destination      *string `queryParam:"style=form,explode=true,name=destination"`
	DestinationName  *string `queryParam:"style=form,explode=true,name=destination-name"`
	EncryptionKey    *string `queryParam:"style=form,explode=true,name=encryption-key"`
	Fare             *string `queryParam:"style=form,explode=true,name=fare"`
	FareCurrency     *string `queryParam:"style=form,explode=true,name=fare-currency"`
	Lang             string  `queryParam:"style=form,explode=true,name=lang"`
	NetFare          *string `queryParam:"style=form,explode=true,name=net-fare"`
	Origin           *string `queryParam:"style=form,explode=true,name=origin"`
	OriginName       *string `queryParam:"style=form,explode=true,name=origin-name"`
	OutboundSegments *string `queryParam:"style=form,explode=true,name=outbound-segments"`
	Partnerid        *string `queryParam:"style=form,explode=true,name=partnerid"`
	ReturnDate       *string `queryParam:"style=form,explode=true,name=return-date"`
	ReturnSegments   *string `queryParam:"style=form,explode=true,name=return-segments"`
	Trackingid       string  `queryParam:"style=form,explode=true,name=trackingid"`
	TravelDate       *string `queryParam:"style=form,explode=true,name=travel-date"`
	Travelers        *string `queryParam:"style=form,explode=true,name=travelers"`
}

type DeepLinksHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type DeepLinksSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type DeepLinksRequest struct {
	QueryParams DeepLinksQueryParams
	Headers     DeepLinksHeaders
	Security    DeepLinksSecurity
}

type DeepLinksResponse struct {
	ContentType                       string
	DeepLinks200ApplicationJSONString *string
	StatusCode                        int64
}
