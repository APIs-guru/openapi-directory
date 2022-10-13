package operations

import (
	"openapi/pkg/models/shared"
)

type ParseJapaneseNamePathParams struct {
	JapaneseName string `pathParam:"style=simple,explode=false,name=japaneseName"`
}

type ParseJapaneseNameSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseJapaneseNameRequest struct {
	PathParams ParseJapaneseNamePathParams
	Security   ParseJapaneseNameSecurity
}

type ParseJapaneseNameResponse struct {
	ContentType           string
	PersonalNameParsedOut *shared.PersonalNameParsedOut
	StatusCode            int64
}
