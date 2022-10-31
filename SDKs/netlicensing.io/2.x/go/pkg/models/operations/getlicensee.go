package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseePathParams struct {
	LicenseeNumber string `pathParam:"style=simple,explode=false,name=licenseeNumber"`
}

type GetLicenseeSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetLicenseeRequest struct {
	PathParams GetLicenseePathParams
	Security   GetLicenseeSecurity
}

type GetLicenseeResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
