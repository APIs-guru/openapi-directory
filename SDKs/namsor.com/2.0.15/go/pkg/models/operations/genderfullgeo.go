package operations

import (
	"openapi/pkg/models/shared"
)

type GenderFullGeoPathParams struct {
	CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
	FullName    string `pathParam:"style=simple,explode=false,name=fullName"`
}

type GenderFullGeoSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderFullGeoRequest struct {
	PathParams GenderFullGeoPathParams
	Security   GenderFullGeoSecurity
}

type GenderFullGeoResponse struct {
	ContentType             string
	PersonalNameGenderedOut *shared.PersonalNameGenderedOut
	StatusCode              int64
}
