package operations

import (
	"openapi/pkg/models/shared"
)

type GenderChineseNameBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderChineseNameBatchRequest struct {
	Request  *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
	Security GenderChineseNameBatchSecurity
}

type GenderChineseNameBatchResponse struct {
	BatchPersonalNameGenderedOut *shared.BatchPersonalNameGenderedOut
	ContentType                  string
	StatusCode                   int64
}
