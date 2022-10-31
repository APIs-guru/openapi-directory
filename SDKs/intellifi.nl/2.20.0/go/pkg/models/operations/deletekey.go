package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteKeyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteKeySecurity struct {
	CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type DeleteKeyRequest struct {
	PathParams DeleteKeyPathParams
	Security   DeleteKeySecurity
}

type DeleteKeyResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
