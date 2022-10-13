package operations

import (
	"openapi/pkg/models/shared"
)

type OriginPathParams struct {
	FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
	LastName  string `pathParam:"style=simple,explode=false,name=lastName"`
}

type OriginSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OriginRequest struct {
	PathParams OriginPathParams
	Security   OriginSecurity
}

type OriginResponse struct {
	ContentType              string
	FirstLastNameOriginedOut *shared.FirstLastNameOriginedOut
	StatusCode               int64
}
