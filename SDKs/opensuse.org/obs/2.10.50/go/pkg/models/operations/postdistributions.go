package operations

import (
	"openapi/pkg/models/shared"
)

type PostDistributionsSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PostDistributionsRequest struct {
	Request  []byte `request:"mediaType=application/xml"`
	Security PostDistributionsSecurity
}

type PostDistributionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
