package operations

import (
	"openapi/pkg/models/shared"
)

type UnmarkFavoriteItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UnmarkFavoriteItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UnmarkFavoriteItemRequest struct {
	PathParams UnmarkFavoriteItemPathParams
	Security   UnmarkFavoriteItemSecurity
}

type UnmarkFavoriteItemResponse struct {
	ContentType     string
	StatusCode      int64
	UserItemDataDto *shared.UserItemDataDto
}
