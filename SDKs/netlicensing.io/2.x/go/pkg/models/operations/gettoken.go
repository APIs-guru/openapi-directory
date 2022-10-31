package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenPathParams struct {
	TokenNumber string `pathParam:"style=simple,explode=false,name=tokenNumber"`
}

type GetTokenSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetTokenRequest struct {
	PathParams GetTokenPathParams
	Security   GetTokenSecurity
}

type GetTokenResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
