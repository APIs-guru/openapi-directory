package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttributeSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetAttributeRequest struct {
	Security GetAttributeSecurity
}

type GetAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
