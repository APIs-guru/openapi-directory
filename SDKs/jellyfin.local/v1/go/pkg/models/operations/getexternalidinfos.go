package operations

import (
	"openapi/pkg/models/shared"
)

type GetExternalIDInfosPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetExternalIDInfosSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetExternalIDInfosRequest struct {
	PathParams GetExternalIDInfosPathParams
	Security   GetExternalIDInfosSecurity
}

type GetExternalIDInfosResponse struct {
	ContentType     string
	ExternalIDInfos []shared.ExternalIDInfo
	ProblemDetails  map[string]interface{}
	StatusCode      int64
}
