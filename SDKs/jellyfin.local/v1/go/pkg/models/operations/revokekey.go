package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeKeyPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type RevokeKeySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RevokeKeyRequest struct {
	PathParams RevokeKeyPathParams
	Security   RevokeKeySecurity
}

type RevokeKeyResponse struct {
	ContentType string
	StatusCode  int64
}
