package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	StageID   string `pathParam:"style=simple,explode=false,name=stageId"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EndTime        *string           `queryParam:"style=form,explode=true,name=endTime"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime      *string           `queryParam:"style=form,explode=true,name=startTime"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity struct {
	Option1 *DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest struct {
	PathParams  DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams
	QueryParams DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams
	Security    DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity
}

type DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse struct {
	ContentType           string
	StageExecutionDetails *shared.StageExecutionDetails
	StatusCode            int64
}
