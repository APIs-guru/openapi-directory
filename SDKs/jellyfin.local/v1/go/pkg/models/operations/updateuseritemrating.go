package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserItemRatingPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserItemRatingQueryParams struct {
	Likes *bool `queryParam:"style=form,explode=true,name=likes"`
}

type UpdateUserItemRatingSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateUserItemRatingRequest struct {
	PathParams  UpdateUserItemRatingPathParams
	QueryParams UpdateUserItemRatingQueryParams
	Security    UpdateUserItemRatingSecurity
}

type UpdateUserItemRatingResponse struct {
	ContentType     string
	StatusCode      int64
	UserItemDataDto *shared.UserItemDataDto
}
