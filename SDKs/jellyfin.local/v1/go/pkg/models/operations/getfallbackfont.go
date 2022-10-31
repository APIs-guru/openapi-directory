package operations

import (
	"openapi/pkg/models/shared"
)

type GetFallbackFontPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetFallbackFontSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetFallbackFontRequest struct {
	PathParams GetFallbackFontPathParams
	Security   GetFallbackFontSecurity
}

type GetFallbackFontResponse struct {
	ContentType                                string
	GetFallbackFont200FontWildcardBinaryString []byte
	StatusCode                                 int64
}
