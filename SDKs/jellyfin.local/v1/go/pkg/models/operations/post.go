package operations

import (
	"openapi/pkg/models/shared"
)

type PostPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type PostQueryParams struct {
	ImageRefreshMode    *shared.MetadataRefreshModeEnum `queryParam:"style=form,explode=true,name=imageRefreshMode"`
	MetadataRefreshMode *shared.MetadataRefreshModeEnum `queryParam:"style=form,explode=true,name=metadataRefreshMode"`
	ReplaceAllImages    *bool                           `queryParam:"style=form,explode=true,name=replaceAllImages"`
	ReplaceAllMetadata  *bool                           `queryParam:"style=form,explode=true,name=replaceAllMetadata"`
}

type PostSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostRequest struct {
	PathParams  PostPathParams
	QueryParams PostQueryParams
	Security    PostSecurity
}

type PostResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
