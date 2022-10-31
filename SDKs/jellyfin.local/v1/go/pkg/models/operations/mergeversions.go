package operations

import (
	"openapi/pkg/models/shared"
)

type MergeVersionsQueryParams struct {
	Ids []string `queryParam:"style=form,explode=true,name=ids"`
}

type MergeVersionsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type MergeVersionsRequest struct {
	QueryParams MergeVersionsQueryParams
	Security    MergeVersionsSecurity
}

type MergeVersionsResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
