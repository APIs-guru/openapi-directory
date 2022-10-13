package operations

import (
	"openapi/pkg/models/shared"
)

type CloudresourcemanagerProjectsListOrgPoliciesPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type CloudresourcemanagerProjectsListOrgPoliciesQueryParams struct {
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

type CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudresourcemanagerProjectsListOrgPoliciesSecurity struct {
	Option1 *CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1 `security:"option"`
	Option2 *CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2 `security:"option"`
}

type CloudresourcemanagerProjectsListOrgPoliciesRequest struct {
	PathParams  CloudresourcemanagerProjectsListOrgPoliciesPathParams
	QueryParams CloudresourcemanagerProjectsListOrgPoliciesQueryParams
	Request     *shared.ListOrgPoliciesRequest `request:"mediaType=application/json"`
	Security    CloudresourcemanagerProjectsListOrgPoliciesSecurity
}

type CloudresourcemanagerProjectsListOrgPoliciesResponse struct {
	ContentType             string
	ListOrgPoliciesResponse *shared.ListOrgPoliciesResponse
	StatusCode              int64
}
