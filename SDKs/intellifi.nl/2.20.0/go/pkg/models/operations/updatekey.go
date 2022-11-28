package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateKeyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateKeySecurity struct {
	CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type UpdateKeyRequest struct {
	PathParams UpdateKeyPathParams
	Request    shared.KeyInput `request:"mediaType=application/json"`
	Security   UpdateKeySecurity
}

type UpdateKeyResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
