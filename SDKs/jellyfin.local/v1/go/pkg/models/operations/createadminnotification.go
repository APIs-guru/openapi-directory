package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAdminNotificationQueryParams struct {
	Description *string                       `queryParam:"style=form,explode=true,name=description"`
	Level       *shared.NotificationLevelEnum `queryParam:"style=form,explode=true,name=level"`
	Name        *string                       `queryParam:"style=form,explode=true,name=name"`
	URL         *string                       `queryParam:"style=form,explode=true,name=url"`
}

type CreateAdminNotificationSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type CreateAdminNotificationRequest struct {
	QueryParams CreateAdminNotificationQueryParams
	Security    CreateAdminNotificationSecurity
}

type CreateAdminNotificationResponse struct {
	ContentType string
	StatusCode  int64
}
