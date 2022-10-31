package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsGetExecutionDetailsPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsSecurity struct {
	Option1 *DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsGetExecutionDetailsRequest struct {
	PathParams  DataflowProjectsLocationsJobsGetExecutionDetailsPathParams
	QueryParams DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams
	Security    DataflowProjectsLocationsJobsGetExecutionDetailsSecurity
}

type DataflowProjectsLocationsJobsGetExecutionDetailsResponse struct {
	ContentType         string
	JobExecutionDetails *shared.JobExecutionDetails
	StatusCode          int64
}
