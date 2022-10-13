package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type MarkPlayedItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type MarkPlayedItemQueryParams struct {
	DatePlayed *time.Time `queryParam:"style=form,explode=true,name=datePlayed"`
}

type MarkPlayedItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type MarkPlayedItemRequest struct {
	PathParams  MarkPlayedItemPathParams
	QueryParams MarkPlayedItemQueryParams
	Security    MarkPlayedItemSecurity
}

type MarkPlayedItemResponse struct {
	ContentType     string
	StatusCode      int64
	UserItemDataDto *shared.UserItemDataDto
}
