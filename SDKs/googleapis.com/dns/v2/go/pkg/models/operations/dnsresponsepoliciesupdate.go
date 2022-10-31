package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePoliciesUpdatePathParams struct {
	Location       string `pathParam:"style=simple,explode=false,name=location"`
	Project        string `pathParam:"style=simple,explode=false,name=project"`
	ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
}

type DNSResponsePoliciesUpdateQueryParams struct {
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

type DNSResponsePoliciesUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesUpdateSecurity struct {
	Option1 *DNSResponsePoliciesUpdateSecurityOption1 `security:"option"`
	Option2 *DNSResponsePoliciesUpdateSecurityOption2 `security:"option"`
}

type DNSResponsePoliciesUpdateRequest struct {
	PathParams  DNSResponsePoliciesUpdatePathParams
	QueryParams DNSResponsePoliciesUpdateQueryParams
	Request     *shared.ResponsePolicy `request:"mediaType=application/json"`
	Security    DNSResponsePoliciesUpdateSecurity
}

type DNSResponsePoliciesUpdateResponse struct {
	ContentType                    string
	ResponsePoliciesUpdateResponse *shared.ResponsePoliciesUpdateResponse
	StatusCode                     int64
}
