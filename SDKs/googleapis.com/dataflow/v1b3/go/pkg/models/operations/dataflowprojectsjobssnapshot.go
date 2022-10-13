package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsSnapshotPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsSnapshotQueryParams struct {
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

type DataflowProjectsJobsSnapshotSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsSnapshotSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsSnapshotSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsSnapshotSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsSnapshotSecurity struct {
	Option1 *DataflowProjectsJobsSnapshotSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsSnapshotSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsSnapshotSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsSnapshotSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsSnapshotRequest struct {
	PathParams  DataflowProjectsJobsSnapshotPathParams
	QueryParams DataflowProjectsJobsSnapshotQueryParams
	Request     *shared.SnapshotJobRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsJobsSnapshotSecurity
}

type DataflowProjectsJobsSnapshotResponse struct {
	ContentType string
	Snapshot    *shared.Snapshot
	StatusCode  int64
}
