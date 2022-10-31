package operations

import (
	"openapi/pkg/models/shared"
)

type ParseNamePathParams struct {
	NameFull string `pathParam:"style=simple,explode=false,name=nameFull"`
}

type ParseNameSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseNameRequest struct {
	PathParams ParseNamePathParams
	Security   ParseNameSecurity
}

type ParseNameResponse struct {
	ContentType           string
	PersonalNameParsedOut *shared.PersonalNameParsedOut
	StatusCode            int64
}
