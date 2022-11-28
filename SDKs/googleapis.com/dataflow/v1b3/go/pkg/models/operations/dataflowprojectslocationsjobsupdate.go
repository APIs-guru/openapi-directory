package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsUpdatePathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsUpdateQueryParams struct {
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

type DataflowProjectsLocationsJobsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsUpdateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsUpdateSecurity struct {
	Option1 *DataflowProjectsLocationsJobsUpdateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsUpdateSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsUpdateSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsUpdateSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsUpdateRequest struct {
	PathParams  DataflowProjectsLocationsJobsUpdatePathParams
	QueryParams DataflowProjectsLocationsJobsUpdateQueryParams
	Request     *shared.JobInput `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsJobsUpdateSecurity
}

type DataflowProjectsLocationsJobsUpdateResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
