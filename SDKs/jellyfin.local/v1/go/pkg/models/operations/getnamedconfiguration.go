package operations

import (
	"openapi/pkg/models/shared"
)

type GetNamedConfigurationPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type GetNamedConfigurationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetNamedConfigurationRequest struct {
	PathParams GetNamedConfigurationPathParams
	Security   GetNamedConfigurationSecurity
}

type GetNamedConfigurationResponse struct {
	ContentType                                         string
	GetNamedConfiguration200ApplicationJSONBinaryString []byte
	StatusCode                                          int64
}
