package operations

import (
	"openapi/pkg/models/shared"
)

type LhDeepLinksFfpQueryParams struct {
	CabinClass    *string `queryParam:"style=form,explode=true,name=cabin-class"`
	Catalogues    string  `queryParam:"style=form,explode=true,name=catalogues"`
	Country       string  `queryParam:"style=form,explode=true,name=country"`
	Destination   string  `queryParam:"style=form,explode=true,name=destination"`
	EncryptionKey *string `queryParam:"style=form,explode=true,name=encryption-key"`
	Lang          string  `queryParam:"style=form,explode=true,name=lang"`
	Origin        string  `queryParam:"style=form,explode=true,name=origin"`
	Partnerid     *string `queryParam:"style=form,explode=true,name=partnerid"`
	ReturnDate    *string `queryParam:"style=form,explode=true,name=return-date"`
	Trackingid    string  `queryParam:"style=form,explode=true,name=trackingid"`
	TravelDate    string  `queryParam:"style=form,explode=true,name=travel-date"`
	Travelers     *string `queryParam:"style=form,explode=true,name=travelers"`
}

type LhDeepLinksFfpHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type LhDeepLinksFfpSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type LhDeepLinksFfpRequest struct {
	QueryParams LhDeepLinksFfpQueryParams
	Headers     LhDeepLinksFfpHeaders
	Security    LhDeepLinksFfpSecurity
}

type LhDeepLinksFfpResponse struct {
	ContentType                            string
	LhDeepLinksFfp200ApplicationJSONString *string
	StatusCode                             int64
}
