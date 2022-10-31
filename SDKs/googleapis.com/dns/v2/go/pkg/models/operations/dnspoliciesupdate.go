package operations

import (
	"openapi/pkg/models/shared"
)

type DNSPoliciesUpdatePathParams struct {
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Policy   string `pathParam:"style=simple,explode=false,name=policy"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSPoliciesUpdateQueryParams struct {
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

type DNSPoliciesUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesUpdateSecurity struct {
	Option1 *DNSPoliciesUpdateSecurityOption1 `security:"option"`
	Option2 *DNSPoliciesUpdateSecurityOption2 `security:"option"`
}

type DNSPoliciesUpdateRequest struct {
	PathParams  DNSPoliciesUpdatePathParams
	QueryParams DNSPoliciesUpdateQueryParams
	Request     *shared.Policy `request:"mediaType=application/json"`
	Security    DNSPoliciesUpdateSecurity
}

type DNSPoliciesUpdateResponse struct {
	ContentType            string
	PoliciesUpdateResponse *shared.PoliciesUpdateResponse
	StatusCode             int64
}
