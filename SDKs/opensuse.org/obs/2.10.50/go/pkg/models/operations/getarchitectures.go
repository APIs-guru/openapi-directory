package operations

import (
	"openapi/pkg/models/shared"
)

type GetArchitecturesSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetArchitecturesRequest struct {
	Security GetArchitecturesSecurity
}

type GetArchitecturesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
