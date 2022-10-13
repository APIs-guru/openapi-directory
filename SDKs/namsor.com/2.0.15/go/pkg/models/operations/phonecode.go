package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneCodePathParams struct {
	FirstName   string `pathParam:"style=simple,explode=false,name=firstName"`
	LastName    string `pathParam:"style=simple,explode=false,name=lastName"`
	PhoneNumber string `pathParam:"style=simple,explode=false,name=phoneNumber"`
}

type PhoneCodeSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PhoneCodeRequest struct {
	PathParams PhoneCodePathParams
	Security   PhoneCodeSecurity
}

type PhoneCodeResponse struct {
	ContentType                string
	FirstLastNamePhoneCodedOut *shared.FirstLastNamePhoneCodedOut
	StatusCode                 int64
}
