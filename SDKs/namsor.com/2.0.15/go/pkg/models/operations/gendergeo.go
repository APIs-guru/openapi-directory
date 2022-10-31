package operations

import (
	"openapi/pkg/models/shared"
)

type GenderGeoPathParams struct {
	CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
	FirstName   string `pathParam:"style=simple,explode=false,name=firstName"`
	LastName    string `pathParam:"style=simple,explode=false,name=lastName"`
}

type GenderGeoSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderGeoRequest struct {
	PathParams GenderGeoPathParams
	Security   GenderGeoSecurity
}

type GenderGeoResponse struct {
	ContentType              string
	FirstLastNameGenderedOut *shared.FirstLastNameGenderedOut
	StatusCode               int64
}
