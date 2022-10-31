package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePoliciesCreatePathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSResponsePoliciesCreateQueryParams struct {
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

type DNSResponsePoliciesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesCreateSecurity struct {
	Option1 *DNSResponsePoliciesCreateSecurityOption1 `security:"option"`
	Option2 *DNSResponsePoliciesCreateSecurityOption2 `security:"option"`
}

type DNSResponsePoliciesCreateRequest struct {
	PathParams  DNSResponsePoliciesCreatePathParams
	QueryParams DNSResponsePoliciesCreateQueryParams
	Request     *shared.ResponsePolicy `request:"mediaType=application/json"`
	Security    DNSResponsePoliciesCreateSecurity
}

type DNSResponsePoliciesCreateResponse struct {
	ContentType    string
	ResponsePolicy *shared.ResponsePolicy
	StatusCode     int64
}
