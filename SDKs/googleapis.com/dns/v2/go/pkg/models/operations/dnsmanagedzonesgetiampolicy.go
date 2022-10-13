package operations

import (
	"openapi/pkg/models/shared"
)

type DNSManagedZonesGetIamPolicyPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type DNSManagedZonesGetIamPolicyQueryParams struct {
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

type DNSManagedZonesGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetIamPolicySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetIamPolicySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSManagedZonesGetIamPolicySecurity struct {
	Option1 *DNSManagedZonesGetIamPolicySecurityOption1 `security:"option"`
	Option2 *DNSManagedZonesGetIamPolicySecurityOption2 `security:"option"`
	Option3 *DNSManagedZonesGetIamPolicySecurityOption3 `security:"option"`
	Option4 *DNSManagedZonesGetIamPolicySecurityOption4 `security:"option"`
}

type DNSManagedZonesGetIamPolicyRequest struct {
	PathParams  DNSManagedZonesGetIamPolicyPathParams
	QueryParams DNSManagedZonesGetIamPolicyQueryParams
	Request     *shared.GoogleIamV1GetIamPolicyRequest `request:"mediaType=application/json"`
	Security    DNSManagedZonesGetIamPolicySecurity
}

type DNSManagedZonesGetIamPolicyResponse struct {
	ContentType       string
	GoogleIamV1Policy *shared.GoogleIamV1Policy
	StatusCode        int64
}
