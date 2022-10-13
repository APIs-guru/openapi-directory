package operations

import (
	"openapi/pkg/models/shared"
)

type CountryPathParams struct {
	PersonalNameFull string `pathParam:"style=simple,explode=false,name=personalNameFull"`
}

type CountrySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CountryRequest struct {
	PathParams CountryPathParams
	Security   CountrySecurity
}

type CountryResponse struct {
	ContentType        string
	PersonalNameGeoOut *shared.PersonalNameGeoOut
	StatusCode         int64
}
