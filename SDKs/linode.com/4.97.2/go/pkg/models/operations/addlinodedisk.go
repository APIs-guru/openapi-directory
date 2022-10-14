package operations

import (
	"openapi/pkg/models/shared"
)

type AddLinodeDiskPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type AddLinodeDiskSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type AddLinodeDiskSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddLinodeDiskSecurity struct {
	Option1 *AddLinodeDiskSecurityOption1 `security:"option"`
	Option2 *AddLinodeDiskSecurityOption2 `security:"option"`
}

type AddLinodeDiskRequest struct {
	PathParams AddLinodeDiskPathParams
	Request    shared.DiskRequest `request:"mediaType=application/json"`
	Security   AddLinodeDiskSecurity
}

type AddLinodeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddLinodeDiskResponse struct {
	ContentType                               string
	Disk                                      *shared.Disk
	StatusCode                                int64
	AddLinodeDiskDefaultApplicationJSONObject *AddLinodeDiskDefaultApplicationJSON
}
