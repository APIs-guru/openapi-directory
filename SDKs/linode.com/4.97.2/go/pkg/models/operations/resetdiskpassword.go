package operations

import (
	"openapi/pkg/models/shared"
)

type ResetDiskPasswordPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type ResetDiskPasswordSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ResetDiskPasswordDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ResetDiskPasswordRequest struct {
	PathParams ResetDiskPasswordPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   ResetDiskPasswordSecurity
}

type ResetDiskPasswordResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ResetDiskPassword200ApplicationJSONObject     map[string]interface{}
	ResetDiskPasswordDefaultApplicationJSONObject *ResetDiskPasswordDefaultApplicationJSON
}
