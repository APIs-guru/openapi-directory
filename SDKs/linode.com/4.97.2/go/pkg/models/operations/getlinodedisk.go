package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeDiskRequest struct {
	PathParams GetLinodeDiskPathParams
	Security   GetLinodeDiskSecurity
}

type GetLinodeDiskResponse struct {
	ContentType                               string
	Disk                                      *shared.Disk
	StatusCode                                int64
	GetLinodeDiskDefaultApplicationJSONObject *GetLinodeDiskDefaultApplicationJSON
}
