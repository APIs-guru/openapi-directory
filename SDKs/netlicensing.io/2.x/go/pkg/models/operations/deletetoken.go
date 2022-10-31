package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTokenPathParams struct {
	TokenNumber string `pathParam:"style=simple,explode=false,name=tokenNumber"`
}

type DeleteTokenSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteTokenRequest struct {
	PathParams DeleteTokenPathParams
	Security   DeleteTokenSecurity
}

type DeleteTokenResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
