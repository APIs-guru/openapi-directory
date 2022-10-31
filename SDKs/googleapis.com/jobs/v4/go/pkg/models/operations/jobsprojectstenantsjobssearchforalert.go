package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsTenantsJobsSearchForAlertPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsTenantsJobsSearchForAlertQueryParams struct {
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

type JobsProjectsTenantsJobsSearchForAlertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsSearchForAlertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsSearchForAlertSecurity struct {
	Option1 *JobsProjectsTenantsJobsSearchForAlertSecurityOption1 `security:"option"`
	Option2 *JobsProjectsTenantsJobsSearchForAlertSecurityOption2 `security:"option"`
}

type JobsProjectsTenantsJobsSearchForAlertRequest struct {
	PathParams  JobsProjectsTenantsJobsSearchForAlertPathParams
	QueryParams JobsProjectsTenantsJobsSearchForAlertQueryParams
	Request     *shared.SearchJobsRequest `request:"mediaType=application/json"`
	Security    JobsProjectsTenantsJobsSearchForAlertSecurity
}

type JobsProjectsTenantsJobsSearchForAlertResponse struct {
	ContentType        string
	SearchJobsResponse *shared.SearchJobsResponse
	StatusCode         int64
}
