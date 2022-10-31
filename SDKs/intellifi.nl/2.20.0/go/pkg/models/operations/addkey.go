package operations

import (
	"openapi/pkg/models/shared"
)

type AddKeySecurity struct {
	CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type AddKeyRequest struct {
	Request  shared.Key `request:"mediaType=application/json"`
	Security AddKeySecurity
}

type AddKeyResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
