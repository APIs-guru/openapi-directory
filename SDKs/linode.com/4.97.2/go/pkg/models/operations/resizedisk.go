package operations

import (
	"openapi/pkg/models/shared"
)

type ResizeDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ResizeDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ResizeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResizeDiskRequest struct {
	PathParams ResizeDiskPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   ResizeDiskSecurity
}

type ResizeDiskResponse struct {
	ContentType                            string
	StatusCode                             int64
	ResizeDisk200ApplicationJSONObject     map[string]interface{}
	ResizeDiskDefaultApplicationJSONObject *ResizeDiskDefaultApplicationJSON
}
