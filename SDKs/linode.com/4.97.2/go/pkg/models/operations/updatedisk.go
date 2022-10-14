package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateDiskSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateDiskSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateDiskSecurity struct {
	Option1 *UpdateDiskSecurityOption1 `security:"option"`
	Option2 *UpdateDiskSecurityOption2 `security:"option"`
}

type UpdateDiskRequest struct {
	PathParams UpdateDiskPathParams
	Request    shared.Disk `request:"mediaType=application/json"`
	Security   UpdateDiskSecurity
}

type UpdateDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateDiskResponse struct {
	ContentType                            string
	Disk                                   *shared.Disk
	StatusCode                             int64
	UpdateDiskDefaultApplicationJSONObject *UpdateDiskDefaultApplicationJSON
}
