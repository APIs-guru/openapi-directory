package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsTenantsJobsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type JobsProjectsTenantsJobsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type JobsProjectsTenantsJobsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsTenantsJobsPatchSecurity struct {
	Option1 *JobsProjectsTenantsJobsPatchSecurityOption1 `security:"option"`
	Option2 *JobsProjectsTenantsJobsPatchSecurityOption2 `security:"option"`
}

type JobsProjectsTenantsJobsPatchRequest struct {
	PathParams  JobsProjectsTenantsJobsPatchPathParams
	QueryParams JobsProjectsTenantsJobsPatchQueryParams
	Request     *shared.Job `request:"mediaType=application/json"`
	Security    JobsProjectsTenantsJobsPatchSecurity
}

type JobsProjectsTenantsJobsPatchResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
