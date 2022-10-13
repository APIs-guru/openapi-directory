package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublishedSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPublishedRequest struct {
	Security GetPublishedSecurity
}

type GetPublishedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
