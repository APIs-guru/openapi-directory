package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistributionsSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetDistributionsRequest struct {
	Security GetDistributionsSecurity
}

type GetDistributionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
