package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsJobsSearchForAlertPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsJobsSearchForAlertQueryParams struct {
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

type JobsProjectsJobsSearchForAlertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsJobsSearchForAlertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsJobsSearchForAlertSecurity struct {
	Option1 *JobsProjectsJobsSearchForAlertSecurityOption1 `security:"option"`
	Option2 *JobsProjectsJobsSearchForAlertSecurityOption2 `security:"option"`
}

type JobsProjectsJobsSearchForAlertRequest struct {
	PathParams  JobsProjectsJobsSearchForAlertPathParams
	QueryParams JobsProjectsJobsSearchForAlertQueryParams
	Request     *shared.SearchJobsRequest `request:"mediaType=application/json"`
	Security    JobsProjectsJobsSearchForAlertSecurity
}

type JobsProjectsJobsSearchForAlertResponse struct {
	ContentType        string
	SearchJobsResponse *shared.SearchJobsResponse
	StatusCode         int64
}
