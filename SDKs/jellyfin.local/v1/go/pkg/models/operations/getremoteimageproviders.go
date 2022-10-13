package operations

import (
	"openapi/pkg/models/shared"
)

type GetRemoteImageProvidersPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetRemoteImageProvidersSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetRemoteImageProvidersRequest struct {
	PathParams GetRemoteImageProvidersPathParams
	Security   GetRemoteImageProvidersSecurity
}

type GetRemoteImageProvidersResponse struct {
	ContentType        string
	ImageProviderInfos []shared.ImageProviderInfo
	ProblemDetails     map[string]interface{}
	StatusCode         int64
}
