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

type CreateSnapshotSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateSnapshotSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateSnapshotSecurity struct {
	Option1 *CreateSnapshotSecurityOption1 `security:"option"`
	Option2 *CreateSnapshotSecurityOption2 `security:"option"`
}

type CreateSnapshotRequest struct {
	PathParams CreateSnapshotPathParams
	Request    CreateSnapshotRequestBody `request:"mediaType=application/json"`
	Security   CreateSnapshotSecurity
}

type CreateSnapshotDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateSnapshotResponse struct {
	Backup                                     *shared.Backup
	ContentType                                string
	StatusCode                                 int64
	CreateSnapshotDefaultApplicationJSONObject *CreateSnapshotDefaultApplicationJSON
}
