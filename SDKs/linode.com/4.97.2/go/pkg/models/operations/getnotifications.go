package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNotificationsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNotificationsSecurity struct {
	Option1 *GetNotificationsSecurityOption1 `security:"option"`
	Option2 *GetNotificationsSecurityOption2 `security:"option"`
}

type GetNotificationsRequest struct {
	Security GetNotificationsSecurity
}

type GetNotifications200ApplicationJSON struct {
	Data    []shared.Notification `json:"data,omitempty"`
	Page    *int64                `json:"page,omitempty"`
	Pages   *int64                `json:"pages,omitempty"`
	Results *int64                `json:"results,omitempty"`
}

type GetNotificationsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNotificationsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetNotifications200ApplicationJSONObject     *GetNotifications200ApplicationJSON
	GetNotificationsDefaultApplicationJSONObject *GetNotificationsDefaultApplicationJSON
}
