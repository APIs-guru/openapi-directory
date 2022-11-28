package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type UpdateDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateDiskRequest struct {
	PathParams UpdateDiskPathParams
	Request    shared.DiskInput `request:"mediaType=application/json"`
	Security   UpdateDiskSecurity
}

type UpdateDiskResponse struct {
	ContentType                            string
	Disk                                   *shared.Disk
	StatusCode                             int64
	UpdateDiskDefaultApplicationJSONObject *UpdateDiskDefaultApplicationJSON
}
