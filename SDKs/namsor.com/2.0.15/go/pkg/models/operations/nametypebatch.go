package operations

import (
	"openapi/pkg/models/shared"
)

type NameTypeBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type NameTypeBatchRequest struct {
	Request  *shared.BatchNameIn `request:"mediaType=application/json"`
	Security NameTypeBatchSecurity
}

type NameTypeBatchResponse struct {
	BatchProperNounCategorizedOut *shared.BatchProperNounCategorizedOut
	ContentType                   string
	StatusCode                    int64
}
