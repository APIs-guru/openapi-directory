package operations

import (
	"openapi/pkg/models/shared"
)

type ParseChineseNamePathParams struct {
	ChineseName string `pathParam:"style=simple,explode=false,name=chineseName"`
}

type ParseChineseNameSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseChineseNameRequest struct {
	PathParams ParseChineseNamePathParams
	Security   ParseChineseNameSecurity
}

type ParseChineseNameResponse struct {
	ContentType           string
	PersonalNameParsedOut *shared.PersonalNameParsedOut
	StatusCode            int64
}
