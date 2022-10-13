package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePoliciesGetPathParams struct {
	Location       string `pathParam:"style=simple,explode=false,name=location"`
	Project        string `pathParam:"style=simple,explode=false,name=project"`
	ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
}

type DNSResponsePoliciesGetQueryParams struct {
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

type DNSResponsePoliciesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesGetSecurity struct {
	Option1 *DNSResponsePoliciesGetSecurityOption1 `security:"option"`
	Option2 *DNSResponsePoliciesGetSecurityOption2 `security:"option"`
	Option3 *DNSResponsePoliciesGetSecurityOption3 `security:"option"`
	Option4 *DNSResponsePoliciesGetSecurityOption4 `security:"option"`
}

type DNSResponsePoliciesGetRequest struct {
	PathParams  DNSResponsePoliciesGetPathParams
	QueryParams DNSResponsePoliciesGetQueryParams
	Security    DNSResponsePoliciesGetSecurity
}

type DNSResponsePoliciesGetResponse struct {
	ContentType    string
	ResponsePolicy *shared.ResponsePolicy
	StatusCode     int64
}
