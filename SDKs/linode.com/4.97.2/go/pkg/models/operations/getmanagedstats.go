package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedStatsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedStats200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type GetManagedStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedStatsRequest struct {
	Security GetManagedStatsSecurity
}

type GetManagedStatsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetManagedStats200ApplicationJSONObject     *GetManagedStats200ApplicationJSON
	GetManagedStatsDefaultApplicationJSONObject *GetManagedStatsDefaultApplicationJSON
}
