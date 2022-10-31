package operations

import (
	"openapi/pkg/models/shared"
)

type JapaneseNameLatinCandidatesPathParams struct {
	JapaneseGivenNameKanji string `pathParam:"style=simple,explode=false,name=japaneseGivenNameKanji"`
	JapaneseSurnameKanji   string `pathParam:"style=simple,explode=false,name=japaneseSurnameKanji"`
}

type JapaneseNameLatinCandidatesSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JapaneseNameLatinCandidatesRequest struct {
	PathParams JapaneseNameLatinCandidatesPathParams
	Security   JapaneseNameLatinCandidatesSecurity
}

type JapaneseNameLatinCandidatesResponse struct {
	ContentType            string
	NameMatchCandidatesOut *shared.NameMatchCandidatesOut
	StatusCode             int64
}
