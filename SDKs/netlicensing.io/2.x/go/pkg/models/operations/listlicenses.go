package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicensesSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ListLicensesRequest struct {
	Security ListLicensesSecurity
}

type ListLicensesResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	Netlicensings []interface{}
}
