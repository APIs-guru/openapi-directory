package operations

import (
	"openapi/pkg/models/shared"
)

type CorridorBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CorridorBatchRequest struct {
	Request  *shared.BatchCorridorIn `request:"mediaType=application/json"`
	Security CorridorBatchSecurity
}

type CorridorBatchResponse struct {
	BatchCorridorOut *shared.BatchCorridorOut
	ContentType      string
	StatusCode       int64
}
