package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type DeleteDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteDiskRequest struct {
	PathParams DeleteDiskPathParams
	Security   DeleteDiskSecurity
}

type DeleteDiskResponse struct {
	ContentType                            string
	StatusCode                             int64
	DeleteDisk200ApplicationJSONObject     map[string]interface{}
	DeleteDiskDefaultApplicationJSONObject *DeleteDiskDefaultApplicationJSON
}
