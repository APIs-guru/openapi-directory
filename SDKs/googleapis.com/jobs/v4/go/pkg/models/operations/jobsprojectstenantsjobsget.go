package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsTenantsJobsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type JobsProjectsTenantsJobsGetQueryParams struct {
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

type JobsProjectsTenantsJobsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsGetSecurity struct {
	Option1 *JobsProjectsTenantsJobsGetSecurityOption1 `security:"option"`
	Option2 *JobsProjectsTenantsJobsGetSecurityOption2 `security:"option"`
}

type JobsProjectsTenantsJobsGetRequest struct {
	PathParams  JobsProjectsTenantsJobsGetPathParams
	QueryParams JobsProjectsTenantsJobsGetQueryParams
	Security    JobsProjectsTenantsJobsGetSecurity
}

type JobsProjectsTenantsJobsGetResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
