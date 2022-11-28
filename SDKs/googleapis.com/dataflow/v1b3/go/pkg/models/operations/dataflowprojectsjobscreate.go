package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsCreatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsCreateViewEnum string

const (
	DataflowProjectsJobsCreateViewEnumJobViewUnknown     DataflowProjectsJobsCreateViewEnum = "JOB_VIEW_UNKNOWN"
	DataflowProjectsJobsCreateViewEnumJobViewSummary     DataflowProjectsJobsCreateViewEnum = "JOB_VIEW_SUMMARY"
	DataflowProjectsJobsCreateViewEnumJobViewAll         DataflowProjectsJobsCreateViewEnum = "JOB_VIEW_ALL"
	DataflowProjectsJobsCreateViewEnumJobViewDescription DataflowProjectsJobsCreateViewEnum = "JOB_VIEW_DESCRIPTION"
)

type DataflowProjectsJobsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                             `queryParam:"style=form,explode=true,name=key"`
	Location       *string                             `queryParam:"style=form,explode=true,name=location"`
	OauthToken     *string                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                             `queryParam:"style=form,explode=true,name=quotaUser"`
	ReplaceJobID   *string                             `queryParam:"style=form,explode=true,name=replaceJobId"`
	UploadType     *string                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                             `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *DataflowProjectsJobsCreateViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type DataflowProjectsJobsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsCreateSecurity struct {
	Option1 *DataflowProjectsJobsCreateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsCreateSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsCreateSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsCreateSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsCreateRequest struct {
	PathParams  DataflowProjectsJobsCreatePathParams
	QueryParams DataflowProjectsJobsCreateQueryParams
	Request     *shared.JobInput `request:"mediaType=application/json"`
	Security    DataflowProjectsJobsCreateSecurity
}

type DataflowProjectsJobsCreateResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
