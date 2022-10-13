package operations

import (
	"openapi/pkg/models/shared"
)

type ParseChineseNameBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseChineseNameBatchRequest struct {
	Request  *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
	Security ParseChineseNameBatchSecurity
}

type ParseChineseNameBatchResponse struct {
	BatchPersonalNameParsedOut *shared.BatchPersonalNameParsedOut
	ContentType                string
	StatusCode                 int64
}
