package operations

import (
	"openapi/pkg/models/shared"
)

type LicensingModelsSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type LicensingModelsRequest struct {
	Security LicensingModelsSecurity
}

type LicensingModelsResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
