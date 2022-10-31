package operations

import (
	"openapi/pkg/models/shared"
)

type AddressSearchQueryParams struct {
	Filter          *string `queryParam:"style=form,explode=true,name=filter"`
	Licensee        *string `queryParam:"style=form,explode=true,name=licensee"`
	Limit           *int32  `queryParam:"style=form,explode=true,name=limit"`
	Page            *int32  `queryParam:"style=form,explode=true,name=page"`
	PostcodeOutward *string `queryParam:"style=form,explode=true,name=postcode_outward"`
	Query           string  `queryParam:"style=form,explode=true,name=query"`
}

type AddressSearchSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type AddressSearchRequest struct {
	QueryParams AddressSearchQueryParams
	Security    AddressSearchSecurity
}

type AddressSearchResponse struct {
	AddressSearchResponseSchema *shared.AddressSearchResponseSchema
	ContentType                 string
	ErrorResponseSchema         *shared.ErrorResponseSchema
	StatusCode                  int64
}
