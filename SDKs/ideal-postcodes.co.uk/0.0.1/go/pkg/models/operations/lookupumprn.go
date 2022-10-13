package operations

import (
	"openapi/pkg/models/shared"
)

type LookupUmprnPathParams struct {
	Umprn string `pathParam:"style=simple,explode=false,name=umprn"`
}

type LookupUmprnQueryParams struct {
	Filter   *string `queryParam:"style=form,explode=true,name=filter"`
	Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
}

type LookupUmprnSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type LookupUmprnRequest struct {
	PathParams  LookupUmprnPathParams
	QueryParams LookupUmprnQueryParams
	Security    LookupUmprnSecurity
}

type LookupUmprnResponse struct {
	AddressLookupResponseSchema *shared.AddressLookupResponseSchema
	ContentType                 string
	ErrorResponseSchema         *shared.ErrorResponseSchema
	StatusCode                  int64
}
