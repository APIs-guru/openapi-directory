package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeDiskSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeDiskSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeDiskSecurity struct {
	Option1 *GetLinodeDiskSecurityOption1 `security:"option"`
	Option2 *GetLinodeDiskSecurityOption2 `security:"option"`
}

type GetLinodeDiskRequest struct {
	PathParams GetLinodeDiskPathParams
	Security   GetLinodeDiskSecurity
}

type GetLinodeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeDiskResponse struct {
	ContentType                               string
	Disk                                      *shared.Disk
	StatusCode                                int64
	GetLinodeDiskDefaultApplicationJSONObject *GetLinodeDiskDefaultApplicationJSON
}
