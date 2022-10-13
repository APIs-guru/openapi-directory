package operations

import (
	"openapi/pkg/models/shared"
)

type GetParentPathQueryParams struct {
	Path string `queryParam:"style=form,explode=true,name=path"`
}

type GetParentPathSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetParentPathRequest struct {
	QueryParams GetParentPathQueryParams
	Security    GetParentPathSecurity
}

type GetParentPathResponse struct {
	ContentType                           string
	GetParentPath200ApplicationJSONString *string
	StatusCode                            int64
}
