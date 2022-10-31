package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserEmailBadgesPathParams struct {
	UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type GetUsersUserEmailBadgesRequest struct {
	PathParams GetUsersUserEmailBadgesPathParams
}

type GetUsersUserEmailBadgesResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	UserBadges  []shared.UserBadge
}
