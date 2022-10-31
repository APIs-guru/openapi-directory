package operations

import (
	"openapi/pkg/models/shared"
)

type NameTypeGeoPathParams struct {
	CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
	ProperNoun  string `pathParam:"style=simple,explode=false,name=properNoun"`
}

type NameTypeGeoSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type NameTypeGeoRequest struct {
	PathParams NameTypeGeoPathParams
	Security   NameTypeGeoSecurity
}

type NameTypeGeoResponse struct {
	ContentType              string
	ProperNounCategorizedOut *shared.ProperNounCategorizedOut
	StatusCode               int64
}
