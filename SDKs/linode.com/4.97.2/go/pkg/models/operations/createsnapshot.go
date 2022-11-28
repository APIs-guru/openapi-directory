package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSnapshotPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type CreateSnapshotRequestBody struct {
	Label string `json:"label"`
}

type CreateSnapshotSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateSnapshotDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateSnapshotRequest struct {
	PathParams CreateSnapshotPathParams
	Request    CreateSnapshotRequestBody `request:"mediaType=application/json"`
	Security   CreateSnapshotSecurity
}

type CreateSnapshotResponse struct {
	Backup                                     *shared.Backup
	ContentType                                string
	StatusCode                                 int64
	CreateSnapshotDefaultApplicationJSONObject *CreateSnapshotDefaultApplicationJSON
}
