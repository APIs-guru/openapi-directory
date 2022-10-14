package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedStatsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedStatsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedStatsSecurity struct {
	Option1 *GetManagedStatsSecurityOption1 `security:"option"`
	Option2 *GetManagedStatsSecurityOption2 `security:"option"`
}

type GetManagedStatsRequest struct {
	Security GetManagedStatsSecurity
}

type GetManagedStats200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type GetManagedStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedStatsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetManagedStats200ApplicationJSONObject     *GetManagedStats200ApplicationJSON
	GetManagedStatsDefaultApplicationJSONObject *GetManagedStatsDefaultApplicationJSON
}
