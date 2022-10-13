package operations

import (
	"openapi/pkg/models/shared"
)

type ListTokensSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ListTokensRequest struct {
	Security ListTokensSecurity
}

type ListTokensResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	Netlicensings []interface{}
}
