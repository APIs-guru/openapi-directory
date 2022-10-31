package operations

import (
	"openapi/pkg/models/shared"
)

type GenderBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderBatchRequest struct {
	Request  *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
	Security GenderBatchSecurity
}

type GenderBatchResponse struct {
	BatchFirstLastNameGenderedOut *shared.BatchFirstLastNameGenderedOut
	ContentType                   string
	StatusCode                    int64
}
