package operations

import (
	"openapi/pkg/models/shared"
)

type GenderFullPathParams struct {
	FullName string `pathParam:"style=simple,explode=false,name=fullName"`
}

type GenderFullSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderFullRequest struct {
	PathParams GenderFullPathParams
	Security   GenderFullSecurity
}

type GenderFullResponse struct {
	ContentType             string
	PersonalNameGenderedOut *shared.PersonalNameGenderedOut
	StatusCode              int64
}
