package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetItemRequest struct {
	PathParams GetItemPathParams
	Security   GetItemSecurity
}

type GetItemResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
