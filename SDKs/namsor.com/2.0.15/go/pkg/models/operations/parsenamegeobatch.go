package operations

import (
	"openapi/pkg/models/shared"
)

type ParseNameGeoBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ParseNameGeoBatchRequest struct {
	Request  *shared.BatchPersonalNameGeoIn `request:"mediaType=application/json"`
	Security ParseNameGeoBatchSecurity
}

type ParseNameGeoBatchResponse struct {
	BatchPersonalNameParsedOut *shared.BatchPersonalNameParsedOut
	ContentType                string
	StatusCode                 int64
}
