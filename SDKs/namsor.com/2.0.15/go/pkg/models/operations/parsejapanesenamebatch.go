package operations

import (
	"openapi/pkg/models/shared"
)

type ParseJapaneseNameBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseJapaneseNameBatchRequest struct {
	Request  *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
	Security ParseJapaneseNameBatchSecurity
}

type ParseJapaneseNameBatchResponse struct {
	BatchPersonalNameParsedOut *shared.BatchPersonalNameParsedOut
	ContentType                string
	StatusCode                 int64
}
