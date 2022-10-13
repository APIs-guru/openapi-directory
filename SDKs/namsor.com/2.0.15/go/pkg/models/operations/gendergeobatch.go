package operations

import (
	"openapi/pkg/models/shared"
)

type GenderGeoBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderGeoBatchRequest struct {
	Request  *shared.BatchFirstLastNameGeoIn `request:"mediaType=application/json"`
	Security GenderGeoBatchSecurity
}

type GenderGeoBatchResponse struct {
	BatchFirstLastNameGenderedOut *shared.BatchFirstLastNameGenderedOut
	ContentType                   string
	StatusCode                    int64
}
