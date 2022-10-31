package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAlternateSourcesPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteAlternateSourcesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAlternateSourcesRequest struct {
	PathParams DeleteAlternateSourcesPathParams
	Security   DeleteAlternateSourcesSecurity
}

type DeleteAlternateSourcesResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
