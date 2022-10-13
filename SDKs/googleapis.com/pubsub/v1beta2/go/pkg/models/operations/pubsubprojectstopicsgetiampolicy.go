package operations

import (
	"openapi/pkg/models/shared"
)

type PubsubProjectsTopicsGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type PubsubProjectsTopicsGetIamPolicyQueryParams struct {
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

type PubsubProjectsTopicsGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type PubsubProjectsTopicsGetIamPolicySecurity struct {
	Option1 *PubsubProjectsTopicsGetIamPolicySecurityOption1 `security:"option"`
	Option2 *PubsubProjectsTopicsGetIamPolicySecurityOption2 `security:"option"`
}

type PubsubProjectsTopicsGetIamPolicyRequest struct {
	PathParams  PubsubProjectsTopicsGetIamPolicyPathParams
	QueryParams PubsubProjectsTopicsGetIamPolicyQueryParams
	Security    PubsubProjectsTopicsGetIamPolicySecurity
}

type PubsubProjectsTopicsGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
