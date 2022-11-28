package operations

import (
	"openapi/pkg/models/shared"
)

type AddLinodeDiskPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type AddLinodeDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AddLinodeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddLinodeDiskRequest struct {
	PathParams AddLinodeDiskPathParams
	Request    shared.DiskRequest `request:"mediaType=application/json"`
	Security   AddLinodeDiskSecurity
}

type AddLinodeDiskResponse struct {
	ContentType                               string
	Disk                                      *shared.Disk
	StatusCode                                int64
	AddLinodeDiskDefaultApplicationJSONObject *AddLinodeDiskDefaultApplicationJSON
}
