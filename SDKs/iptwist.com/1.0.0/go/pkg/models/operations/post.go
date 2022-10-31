package operations

import (
	"openapi/pkg/models/shared"
)

type PostSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostRequest struct {
	Request  shared.Request `request:"mediaType=application/json"`
	Security PostSecurity
}

type PostResponse struct {
	ContentType string
	Response    *shared.Response
	StatusCode  int64
}
