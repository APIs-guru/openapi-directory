package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePolicyRulesGetPathParams struct {
	Project            string `pathParam:"style=simple,explode=false,name=project"`
	ResponsePolicy     string `pathParam:"style=simple,explode=false,name=responsePolicy"`
	ResponsePolicyRule string `pathParam:"style=simple,explode=false,name=responsePolicyRule"`
}

type DNSResponsePolicyRulesGetQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	ClientOperationID *string           `queryParam:"style=form,explode=true,name=clientOperationId"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSResponsePolicyRulesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesGetSecurity struct {
	Option1 *DNSResponsePolicyRulesGetSecurityOption1 `security:"option"`
	Option2 *DNSResponsePolicyRulesGetSecurityOption2 `security:"option"`
	Option3 *DNSResponsePolicyRulesGetSecurityOption3 `security:"option"`
	Option4 *DNSResponsePolicyRulesGetSecurityOption4 `security:"option"`
}

type DNSResponsePolicyRulesGetRequest struct {
	PathParams  DNSResponsePolicyRulesGetPathParams
	QueryParams DNSResponsePolicyRulesGetQueryParams
	Security    DNSResponsePolicyRulesGetSecurity
}

type DNSResponsePolicyRulesGetResponse struct {
	ContentType        string
	ResponsePolicyRule *shared.ResponsePolicyRule
	StatusCode         int64
}
