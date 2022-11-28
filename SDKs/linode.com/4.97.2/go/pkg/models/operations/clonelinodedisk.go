package operations

import (
	"openapi/pkg/models/shared"
)

type CloneLinodeDiskPathParams struct {
	DiskID   int64 `pathParam:"style=simple,explode=false,name=diskId"`
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type CloneLinodeDiskSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CloneLinodeDiskDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CloneLinodeDiskRequest struct {
	PathParams CloneLinodeDiskPathParams
	Security   CloneLinodeDiskSecurity
}

type CloneLinodeDiskResponse struct {
	ContentType                                 string
	Disk                                        *shared.Disk
	StatusCode                                  int64
	CloneLinodeDiskDefaultApplicationJSONObject *CloneLinodeDiskDefaultApplicationJSON
}
