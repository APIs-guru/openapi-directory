package operations

import (
	"openapi/pkg/models/shared"
)

type MarkFavoriteItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type MarkFavoriteItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type MarkFavoriteItemRequest struct {
	PathParams MarkFavoriteItemPathParams
	Security   MarkFavoriteItemSecurity
}

type MarkFavoriteItemResponse struct {
	ContentType     string
	StatusCode      int64
	UserItemDataDto *shared.UserItemDataDto
}
