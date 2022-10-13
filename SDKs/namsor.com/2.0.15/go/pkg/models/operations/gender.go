package operations

import (
	"openapi/pkg/models/shared"
)

type GenderPathParams struct {
	FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
	LastName  string `pathParam:"style=simple,explode=false,name=lastName"`
}

type GenderSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderRequest struct {
	PathParams GenderPathParams
	Security   GenderSecurity
}

type GenderResponse struct {
	ContentType              string
	FirstLastNameGenderedOut *shared.FirstLastNameGenderedOut
	StatusCode               int64
}
