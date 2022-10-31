package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsCompaniesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsCompaniesCreateQueryParams struct {
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

type JobsProjectsCompaniesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsCompaniesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsCompaniesCreateSecurity struct {
	Option1 *JobsProjectsCompaniesCreateSecurityOption1 `security:"option"`
	Option2 *JobsProjectsCompaniesCreateSecurityOption2 `security:"option"`
}

type JobsProjectsCompaniesCreateRequest struct {
	PathParams  JobsProjectsCompaniesCreatePathParams
	QueryParams JobsProjectsCompaniesCreateQueryParams
	Request     *shared.CreateCompanyRequest `request:"mediaType=application/json"`
	Security    JobsProjectsCompaniesCreateSecurity
}

type JobsProjectsCompaniesCreateResponse struct {
	Company     *shared.Company
	ContentType string
	StatusCode  int64
}
