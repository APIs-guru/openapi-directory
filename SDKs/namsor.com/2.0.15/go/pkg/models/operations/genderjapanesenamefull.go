package operations

import (
	"openapi/pkg/models/shared"
)

type GenderJapaneseNameFullPathParams struct {
	JapaneseName string `pathParam:"style=simple,explode=false,name=japaneseName"`
}

type GenderJapaneseNameFullSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderJapaneseNameFullRequest struct {
	PathParams GenderJapaneseNameFullPathParams
	Security   GenderJapaneseNameFullSecurity
}

type GenderJapaneseNameFullResponse struct {
	ContentType             string
	PersonalNameGenderedOut *shared.PersonalNameGenderedOut
	StatusCode              int64
}
