package operations

import (
	"openapi/pkg/models/shared"
)

type JapaneseNameKanjiCandidatesBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JapaneseNameKanjiCandidatesBatchRequest struct {
	Request  *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
	Security JapaneseNameKanjiCandidatesBatchSecurity
}

type JapaneseNameKanjiCandidatesBatchResponse struct {
	BatchNameMatchCandidatesOut *shared.BatchNameMatchCandidatesOut
	ContentType                 string
	StatusCode                  int64
}
