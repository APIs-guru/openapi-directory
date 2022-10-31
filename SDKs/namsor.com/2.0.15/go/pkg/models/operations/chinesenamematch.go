package operations

import (
	"openapi/pkg/models/shared"
)

type ChineseNameMatchPathParams struct {
	ChineseGivenNameLatin string `pathParam:"style=simple,explode=false,name=chineseGivenNameLatin"`
	ChineseName           string `pathParam:"style=simple,explode=false,name=chineseName"`
	ChineseSurnameLatin   string `pathParam:"style=simple,explode=false,name=chineseSurnameLatin"`
}

type ChineseNameMatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ChineseNameMatchRequest struct {
	PathParams ChineseNameMatchPathParams
	Security   ChineseNameMatchSecurity
}

type ChineseNameMatchResponse struct {
	ContentType    string
	NameMatchedOut *shared.NameMatchedOut
	StatusCode     int64
}
