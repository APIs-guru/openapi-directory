package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsSnapshotPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsSnapshotQueryParams struct {
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

type DataflowProjectsLocationsJobsSnapshotSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsSnapshotSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsSnapshotSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsSnapshotSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsSnapshotSecurity struct {
	Option1 *DataflowProjectsLocationsJobsSnapshotSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsSnapshotSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsSnapshotSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsSnapshotSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsSnapshotRequest struct {
	PathParams  DataflowProjectsLocationsJobsSnapshotPathParams
	QueryParams DataflowProjectsLocationsJobsSnapshotQueryParams
	Request     *shared.SnapshotJobRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsJobsSnapshotSecurity
}

type DataflowProjectsLocationsJobsSnapshotResponse struct {
	ContentType string
	Snapshot    *shared.Snapshot
	StatusCode  int64
}
