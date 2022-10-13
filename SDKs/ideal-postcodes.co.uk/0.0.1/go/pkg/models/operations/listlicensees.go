package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseesPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type ListLicenseesQueryParams struct {
	Limit         *int32  `queryParam:"style=form,explode=true,name=limit"`
	Query         *string `queryParam:"style=form,explode=true,name=query"`
	StartingAfter *int32  `queryParam:"style=form,explode=true,name=starting_after"`
}

type ListLicenseesSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type ListLicenseesRequest struct {
	PathParams  ListLicenseesPathParams
	QueryParams ListLicenseesQueryParams
	Security    ListLicenseesSecurity
}

type ListLicenseesResponse struct {
	AddressLookupResponseSchema *shared.AddressLookupResponseSchema
	ContentType                 string
	LicenseeListResponseSchema  *shared.LicenseeListResponseSchema
	StatusCode                  int64
}
