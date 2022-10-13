package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitProjectsTenantsSetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams struct {
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

type IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsSetIamPolicySecurity struct {
	Option1 *IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitProjectsTenantsSetIamPolicySecurityOption2 `security:"option"`
}

type IdentitytoolkitProjectsTenantsSetIamPolicyRequest struct {
	PathParams  IdentitytoolkitProjectsTenantsSetIamPolicyPathParams
	QueryParams IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams
	Request     *shared.GoogleIamV1SetIamPolicyRequest `request:"mediaType=application/json"`
	Security    IdentitytoolkitProjectsTenantsSetIamPolicySecurity
}

type IdentitytoolkitProjectsTenantsSetIamPolicyResponse struct {
	ContentType       string
	GoogleIamV1Policy *shared.GoogleIamV1Policy
	StatusCode        int64
}
