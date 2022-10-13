package operations

import (
	"openapi/pkg/models/shared"
)

type UpdrnToAddressPathParams struct {
	Udprn string `pathParam:"style=simple,explode=false,name=udprn"`
}

type UpdrnToAddressQueryParams struct {
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
}

type UpdrnToAddressSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type UpdrnToAddressRequest struct {
	PathParams  UpdrnToAddressPathParams
	QueryParams UpdrnToAddressQueryParams
	Security    UpdrnToAddressSecurity
}

type UpdrnToAddressResponse struct {
	ContentType                  string
	ErrorResponseSchema          *shared.ErrorResponseSchema
	StatusCode                   int64
	UdprnToAddressResponseSchema *shared.UdprnToAddressResponseSchema
}
