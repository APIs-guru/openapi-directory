package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseTemplatePathParams struct {
	LicenseTemplateNumber string `pathParam:"style=simple,explode=false,name=licenseTemplateNumber"`
}

type GetLicenseTemplateSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetLicenseTemplateRequest struct {
	PathParams GetLicenseTemplatePathParams
	Security   GetLicenseTemplateSecurity
}

type GetLicenseTemplateResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
