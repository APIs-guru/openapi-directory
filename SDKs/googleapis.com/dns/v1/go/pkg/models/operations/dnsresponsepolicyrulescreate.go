package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePolicyRulesCreatePathParams struct {
	Project        string `pathParam:"style=simple,explode=false,name=project"`
	ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
}

type DNSResponsePolicyRulesCreateQueryParams struct {
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

type DNSResponsePolicyRulesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePolicyRulesCreateSecurity struct {
	Option1 *DNSResponsePolicyRulesCreateSecurityOption1 `security:"option"`
	Option2 *DNSResponsePolicyRulesCreateSecurityOption2 `security:"option"`
}

type DNSResponsePolicyRulesCreateRequest struct {
	PathParams  DNSResponsePolicyRulesCreatePathParams
	QueryParams DNSResponsePolicyRulesCreateQueryParams
	Request     *shared.ResponsePolicyRule `request:"mediaType=application/json"`
	Security    DNSResponsePolicyRulesCreateSecurity
}

type DNSResponsePolicyRulesCreateResponse struct {
	ContentType        string
	ResponsePolicyRule *shared.ResponsePolicyRule
	StatusCode         int64
}
