package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicensePathParams struct {
	LicenseNumber string `pathParam:"style=simple,explode=false,name=licenseNumber"`
}

type GetLicenseSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetLicenseRequest struct {
	PathParams GetLicensePathParams
	Security   GetLicenseSecurity
}

type GetLicenseResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
