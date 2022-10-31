package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePolicyRulesDeletePathParams struct {
	Location           string `pathParam:"style=simple,explode=false,name=location"`
	Project            string `pathParam:"style=simple,explode=false,name=project"`
	ResponsePolicy     string `pathParam:"style=simple,explode=false,name=responsePolicy"`
	ResponsePolicyRule string `pathParam:"style=simple,explode=false,name=responsePolicyRule"`
}

type DNSResponsePolicyRulesDeleteQueryParams struct {
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

type DNSResponsePolicyRulesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesDeleteSecurity struct {
	Option1 *DNSResponsePolicyRulesDeleteSecurityOption1 `security:"option"`
	Option2 *DNSResponsePolicyRulesDeleteSecurityOption2 `security:"option"`
}

type DNSResponsePolicyRulesDeleteRequest struct {
	PathParams  DNSResponsePolicyRulesDeletePathParams
	QueryParams DNSResponsePolicyRulesDeleteQueryParams
	Security    DNSResponsePolicyRulesDeleteSecurity
}

type DNSResponsePolicyRulesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
