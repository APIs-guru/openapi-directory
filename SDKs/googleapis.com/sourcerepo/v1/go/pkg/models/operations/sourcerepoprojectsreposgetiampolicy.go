package operations

import (
	"openapi/pkg/models/shared"
)

type SourcerepoProjectsReposGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type SourcerepoProjectsReposGetIamPolicyQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OptionsRequestedPolicyVersion *int64            `queryParam:"style=form,explode=true,name=options.requestedPolicyVersion"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SourcerepoProjectsReposGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetIamPolicySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetIamPolicySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SourcerepoProjectsReposGetIamPolicySecurity struct {
	Option1 *SourcerepoProjectsReposGetIamPolicySecurityOption1 `security:"option"`
	Option2 *SourcerepoProjectsReposGetIamPolicySecurityOption2 `security:"option"`
	Option3 *SourcerepoProjectsReposGetIamPolicySecurityOption3 `security:"option"`
	Option4 *SourcerepoProjectsReposGetIamPolicySecurityOption4 `security:"option"`
}

type SourcerepoProjectsReposGetIamPolicyRequest struct {
	PathParams  SourcerepoProjectsReposGetIamPolicyPathParams
	QueryParams SourcerepoProjectsReposGetIamPolicyQueryParams
	Security    SourcerepoProjectsReposGetIamPolicySecurity
}

type SourcerepoProjectsReposGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
