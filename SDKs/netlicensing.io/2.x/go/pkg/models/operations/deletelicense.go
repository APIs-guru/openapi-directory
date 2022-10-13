package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicensePathParams struct {
	LicenseNumber string `pathParam:"style=simple,explode=false,name=licenseNumber"`
}

type DeleteLicenseSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteLicenseRequest struct {
	PathParams DeleteLicensePathParams
	Security   DeleteLicenseSecurity
}

type DeleteLicenseResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
