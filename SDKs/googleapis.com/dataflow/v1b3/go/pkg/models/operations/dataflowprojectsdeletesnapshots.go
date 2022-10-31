package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsDeleteSnapshotsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsDeleteSnapshotsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Location       *string           `queryParam:"style=form,explode=true,name=location"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SnapshotID     *string           `queryParam:"style=form,explode=true,name=snapshotId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsDeleteSnapshotsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsDeleteSnapshotsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsDeleteSnapshotsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsDeleteSnapshotsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsDeleteSnapshotsSecurity struct {
	Option1 *DataflowProjectsDeleteSnapshotsSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsDeleteSnapshotsSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsDeleteSnapshotsSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsDeleteSnapshotsSecurityOption4 `security:"option"`
}

type DataflowProjectsDeleteSnapshotsRequest struct {
	PathParams  DataflowProjectsDeleteSnapshotsPathParams
	QueryParams DataflowProjectsDeleteSnapshotsQueryParams
	Security    DataflowProjectsDeleteSnapshotsSecurity
}

type DataflowProjectsDeleteSnapshotsResponse struct {
	ContentType            string
	DeleteSnapshotResponse map[string]interface{}
	StatusCode             int64
}
