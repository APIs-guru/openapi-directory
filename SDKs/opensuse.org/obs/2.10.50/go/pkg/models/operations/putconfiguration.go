package operations

import (
	"openapi/pkg/models/shared"
)

type PutConfigurationSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PutConfigurationRequest struct {
	Request  []byte `request:"mediaType=application/xml"`
	Security PutConfigurationSecurity
}

type PutConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
