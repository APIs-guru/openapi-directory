package operations

import (
	"openapi/pkg/models/shared"
)

type ServicemanagementServicesConsumersGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type ServicemanagementServicesConsumersGetIamPolicyQueryParams struct {
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

type ServicemanagementServicesConsumersGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConsumersGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConsumersGetIamPolicySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConsumersGetIamPolicySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicemanagementServicesConsumersGetIamPolicySecurity struct {
	Option1 *ServicemanagementServicesConsumersGetIamPolicySecurityOption1 `security:"option"`
	Option2 *ServicemanagementServicesConsumersGetIamPolicySecurityOption2 `security:"option"`
	Option3 *ServicemanagementServicesConsumersGetIamPolicySecurityOption3 `security:"option"`
	Option4 *ServicemanagementServicesConsumersGetIamPolicySecurityOption4 `security:"option"`
}

type ServicemanagementServicesConsumersGetIamPolicyRequest struct {
	PathParams  ServicemanagementServicesConsumersGetIamPolicyPathParams
	QueryParams ServicemanagementServicesConsumersGetIamPolicyQueryParams
	Request     *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
	Security    ServicemanagementServicesConsumersGetIamPolicySecurity
}

type ServicemanagementServicesConsumersGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
