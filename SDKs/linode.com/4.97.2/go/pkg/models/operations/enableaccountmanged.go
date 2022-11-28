package operations

import (
	"openapi/pkg/models/shared"
)

type EnableAccountMangedSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type EnableAccountMangedDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EnableAccountMangedRequest struct {
	Security EnableAccountMangedSecurity
}

type EnableAccountMangedResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	EnableAccountManged200ApplicationJSONObject     map[string]interface{}
	EnableAccountMangedDefaultApplicationJSONObject *EnableAccountMangedDefaultApplicationJSON
}
