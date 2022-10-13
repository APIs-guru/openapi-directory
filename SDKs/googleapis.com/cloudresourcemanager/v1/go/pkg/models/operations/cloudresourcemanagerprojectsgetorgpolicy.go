package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerProjectsGetOrgPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type CloudresourcemanagerProjectsGetOrgPolicyQueryParams struct {
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

type CloudresourcemanagerProjectsGetOrgPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerProjectsGetOrgPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerProjectsGetOrgPolicySecurity struct {
	Option1 *CloudresourcemanagerProjectsGetOrgPolicySecurityOption1 `security:"option"`
	Option2 *CloudresourcemanagerProjectsGetOrgPolicySecurityOption2 `security:"option"`
}

type CloudresourcemanagerProjectsGetOrgPolicyRequest struct {
	PathParams  CloudresourcemanagerProjectsGetOrgPolicyPathParams
	QueryParams CloudresourcemanagerProjectsGetOrgPolicyQueryParams
	Request     *shared.GetOrgPolicyRequest `request:"mediaType=application/json"`
	Security    CloudresourcemanagerProjectsGetOrgPolicySecurity
}

type CloudresourcemanagerProjectsGetOrgPolicyResponse struct {
	ContentType string
	OrgPolicy   *shared.OrgPolicy
	StatusCode  int64
}
