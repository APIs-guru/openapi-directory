package operations

import (
	"openapi/pkg/models/shared"
)

type JapaneseNameMatchPathParams struct {
	JapaneseGivenNameLatin string `pathParam:"style=simple,explode=false,name=japaneseGivenNameLatin"`
	JapaneseName           string `pathParam:"style=simple,explode=false,name=japaneseName"`
	JapaneseSurnameLatin   string `pathParam:"style=simple,explode=false,name=japaneseSurnameLatin"`
}

type JapaneseNameMatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JapaneseNameMatchRequest struct {
	PathParams JapaneseNameMatchPathParams
	Security   JapaneseNameMatchSecurity
}

type JapaneseNameMatchResponse struct {
	ContentType    string
	NameMatchedOut *shared.NameMatchedOut
	StatusCode     int64
}
