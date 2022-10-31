package operations

import (
	"openapi/pkg/models/shared"
)

type GenderJapaneseNameFullBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderJapaneseNameFullBatchRequest struct {
	Request  *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
	Security GenderJapaneseNameFullBatchSecurity
}

type GenderJapaneseNameFullBatchResponse struct {
	BatchPersonalNameGenderedOut *shared.BatchPersonalNameGenderedOut
	ContentType                  string
	StatusCode                   int64
}
