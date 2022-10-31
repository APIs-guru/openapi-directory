package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsSnapshotsListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsSnapshotsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	JobID          *string           `queryParam:"style=form,explode=true,name=jobId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Location       *string           `queryParam:"style=form,explode=true,name=location"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsSnapshotsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsSnapshotsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsSnapshotsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsSnapshotsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsSnapshotsListSecurity struct {
	Option1 *DataflowProjectsSnapshotsListSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsSnapshotsListSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsSnapshotsListSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsSnapshotsListSecurityOption4 `security:"option"`
}

type DataflowProjectsSnapshotsListRequest struct {
	PathParams  DataflowProjectsSnapshotsListPathParams
	QueryParams DataflowProjectsSnapshotsListQueryParams
	Security    DataflowProjectsSnapshotsListSecurity
}

type DataflowProjectsSnapshotsListResponse struct {
	ContentType           string
	ListSnapshotsResponse *shared.ListSnapshotsResponse
	StatusCode            int64
}
