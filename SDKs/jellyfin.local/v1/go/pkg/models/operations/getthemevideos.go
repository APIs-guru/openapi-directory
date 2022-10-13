package operations

import (
	"openapi/pkg/models/shared"
)

type GetThemeVideosPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetThemeVideosQueryParams struct {
	InheritFromParent *bool   `queryParam:"style=form,explode=true,name=inheritFromParent"`
	UserID            *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetThemeVideosSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetThemeVideosRequest struct {
	PathParams  GetThemeVideosPathParams
	QueryParams GetThemeVideosQueryParams
	Security    GetThemeVideosSecurity
}

type GetThemeVideosResponse struct {
	ContentType      string
	ProblemDetails   map[string]interface{}
	StatusCode       int64
	ThemeMediaResult *shared.ThemeMediaResult
}
