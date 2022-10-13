package operations

import (
	"openapi/pkg/models/shared"
)

type PinyinChineseNamePathParams struct {
	ChineseName string `pathParam:"style=simple,explode=false,name=chineseName"`
}

type PinyinChineseNameSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PinyinChineseNameRequest struct {
	PathParams PinyinChineseNamePathParams
	Security   PinyinChineseNameSecurity
}

type PinyinChineseNameResponse struct {
	ContentType           string
	PersonalNameParsedOut *shared.PersonalNameParsedOut
	StatusCode            int64
}
