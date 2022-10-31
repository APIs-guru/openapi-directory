package operations

import (
	"openapi/pkg/models/shared"
)

type DNSPoliciesGetPathParams struct {
	Policy  string `pathParam:"style=simple,explode=false,name=policy"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSPoliciesGetQueryParams struct {
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

type DNSPoliciesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesGetSecurity struct {
	Option1 *DNSPoliciesGetSecurityOption1 `security:"option"`
	Option2 *DNSPoliciesGetSecurityOption2 `security:"option"`
	Option3 *DNSPoliciesGetSecurityOption3 `security:"option"`
	Option4 *DNSPoliciesGetSecurityOption4 `security:"option"`
}

type DNSPoliciesGetRequest struct {
	PathParams  DNSPoliciesGetPathParams
	QueryParams DNSPoliciesGetQueryParams
	Security    DNSPoliciesGetSecurity
}

type DNSPoliciesGetResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
