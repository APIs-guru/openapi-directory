package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserItemRatingPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUserItemRatingSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteUserItemRatingRequest struct {
	PathParams DeleteUserItemRatingPathParams
	Security   DeleteUserItemRatingSecurity
}

type DeleteUserItemRatingResponse struct {
	ContentType     string
	StatusCode      int64
	UserItemDataDto *shared.UserItemDataDto
}
