package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerFoldersGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type CloudresourcemanagerFoldersGetIamPolicyQueryParams struct {
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

type CloudresourcemanagerFoldersGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerFoldersGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerFoldersGetIamPolicySecurity struct {
	Option1 *CloudresourcemanagerFoldersGetIamPolicySecurityOption1 `security:"option"`
	Option2 *CloudresourcemanagerFoldersGetIamPolicySecurityOption2 `security:"option"`
}

type CloudresourcemanagerFoldersGetIamPolicyRequest struct {
	PathParams  CloudresourcemanagerFoldersGetIamPolicyPathParams
	QueryParams CloudresourcemanagerFoldersGetIamPolicyQueryParams
	Request     *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
	Security    CloudresourcemanagerFoldersGetIamPolicySecurity
}

type CloudresourcemanagerFoldersGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
