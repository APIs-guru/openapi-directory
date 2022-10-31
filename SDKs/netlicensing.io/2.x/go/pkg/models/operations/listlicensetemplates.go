package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseTemplatesSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ListLicenseTemplatesRequest struct {
	Security ListLicenseTemplatesSecurity
}

type ListLicenseTemplatesResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	Netlicensings []interface{}
}
