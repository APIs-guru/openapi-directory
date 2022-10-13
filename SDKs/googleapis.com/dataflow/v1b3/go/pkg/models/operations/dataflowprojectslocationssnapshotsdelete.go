package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsSnapshotsDeletePathParams struct {
	Location   string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID  string `pathParam:"style=simple,explode=false,name=projectId"`
	SnapshotID string `pathParam:"style=simple,explode=false,name=snapshotId"`
}

type DataflowProjectsLocationsSnapshotsDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsLocationsSnapshotsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSnapshotsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSnapshotsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSnapshotsDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsSnapshotsDeleteSecurity struct {
	Option1 *DataflowProjectsLocationsSnapshotsDeleteSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsSnapshotsDeleteSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsSnapshotsDeleteSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsSnapshotsDeleteSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsSnapshotsDeleteRequest struct {
	PathParams  DataflowProjectsLocationsSnapshotsDeletePathParams
	QueryParams DataflowProjectsLocationsSnapshotsDeleteQueryParams
	Security    DataflowProjectsLocationsSnapshotsDeleteSecurity
}

type DataflowProjectsLocationsSnapshotsDeleteResponse struct {
	ContentType            string
	DeleteSnapshotResponse map[string]interface{}
	StatusCode             int64
}
