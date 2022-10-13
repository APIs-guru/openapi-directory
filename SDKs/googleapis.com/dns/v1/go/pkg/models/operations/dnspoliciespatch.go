package operations

import (
	"openapi/pkg/models/shared"
)

type DNSPoliciesPatchPathParams struct {
	Policy  string `pathParam:"style=simple,explode=false,name=policy"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSPoliciesPatchQueryParams struct {
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

type DNSPoliciesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesPatchSecurity struct {
	Option1 *DNSPoliciesPatchSecurityOption1 `security:"option"`
	Option2 *DNSPoliciesPatchSecurityOption2 `security:"option"`
}

type DNSPoliciesPatchRequest struct {
	PathParams  DNSPoliciesPatchPathParams
	QueryParams DNSPoliciesPatchQueryParams
	Request     *shared.Policy `request:"mediaType=application/json"`
	Security    DNSPoliciesPatchSecurity
}

type DNSPoliciesPatchResponse struct {
	ContentType           string
	PoliciesPatchResponse *shared.PoliciesPatchResponse
	StatusCode            int64
}
