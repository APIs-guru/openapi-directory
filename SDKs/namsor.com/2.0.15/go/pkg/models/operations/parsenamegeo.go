package operations

import (
	"openapi/pkg/models/shared"
)

type ParseNameGeoPathParams struct {
	CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
	NameFull    string `pathParam:"style=simple,explode=false,name=nameFull"`
}

type ParseNameGeoSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseNameGeoRequest struct {
	PathParams ParseNameGeoPathParams
	Security   ParseNameGeoSecurity
}

type ParseNameGeoResponse struct {
	ContentType           string
	PersonalNameParsedOut *shared.PersonalNameParsedOut
	StatusCode            int64
}
