package operations

import (
	"openapi/pkg/models/shared"
)

type GenderJapaneseNamePinyinPathParams struct {
	JapaneseGivenName string `pathParam:"style=simple,explode=false,name=japaneseGivenName"`
	JapaneseSurname   string `pathParam:"style=simple,explode=false,name=japaneseSurname"`
}

type GenderJapaneseNamePinyinSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderJapaneseNamePinyinRequest struct {
	PathParams GenderJapaneseNamePinyinPathParams
	Security   GenderJapaneseNamePinyinSecurity
}

type GenderJapaneseNamePinyinResponse struct {
	ContentType              string
	FirstLastNameGenderedOut *shared.FirstLastNameGenderedOut
	StatusCode               int64
}
