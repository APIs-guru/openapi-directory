package operations

import (
	"openapi/pkg/models/shared"
)

var GetMaintenanceServers = []string{
	"https://api.linode.com/v4beta",
}

type GetMaintenanceSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetMaintenanceSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetMaintenanceSecurity struct {
	Option1 *GetMaintenanceSecurityOption1 `security:"option"`
	Option2 *GetMaintenanceSecurityOption2 `security:"option"`
}

type GetMaintenanceRequest struct {
	ServerURL *string
	Security  GetMaintenanceSecurity
}

type GetMaintenance200ApplicationJSON struct {
	Data    []shared.Maintenance `json:"data,omitempty"`
	Page    *int64               `json:"page,omitempty"`
	Pages   *int64               `json:"pages,omitempty"`
	Results *int64               `json:"results,omitempty"`
}

type GetMaintenanceDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetMaintenanceResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetMaintenance200ApplicationJSONObject     *GetMaintenance200ApplicationJSON
	GetMaintenanceDefaultApplicationJSONObject *GetMaintenanceDefaultApplicationJSON
}
