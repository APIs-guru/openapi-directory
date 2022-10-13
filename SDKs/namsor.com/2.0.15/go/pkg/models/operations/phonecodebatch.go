package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneCodeBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PhoneCodeBatchRequest struct {
	Request  *shared.BatchFirstLastNamePhoneNumberIn `request:"mediaType=application/json"`
	Security PhoneCodeBatchSecurity
}

type PhoneCodeBatchResponse struct {
	BatchFirstLastNamePhoneCodedOut *shared.BatchFirstLastNamePhoneCodedOut
	ContentType                     string
	StatusCode                      int64
}
