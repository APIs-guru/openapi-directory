package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneCodeGeoBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PhoneCodeGeoBatchRequest struct {
	Request  *shared.BatchFirstLastNamePhoneNumberGeoIn `request:"mediaType=application/json"`
	Security PhoneCodeGeoBatchSecurity
}

type PhoneCodeGeoBatchResponse struct {
	BatchFirstLastNamePhoneCodedOut *shared.BatchFirstLastNamePhoneCodedOut
	ContentType                     string
	StatusCode                      int64
}
