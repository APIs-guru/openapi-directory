package operations

import (
	"openapi/pkg/models/shared"
)

type DNSPoliciesDeletePathParams struct {
	Policy  string `pathParam:"style=simple,explode=false,name=policy"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSPoliciesDeleteQueryParams struct {
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

type DNSPoliciesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSPoliciesDeleteSecurity struct {
	Option1 *DNSPoliciesDeleteSecurityOption1 `security:"option"`
	Option2 *DNSPoliciesDeleteSecurityOption2 `security:"option"`
}

type DNSPoliciesDeleteRequest struct {
	PathParams  DNSPoliciesDeletePathParams
	QueryParams DNSPoliciesDeleteQueryParams
	Security    DNSPoliciesDeleteSecurity
}

type DNSPoliciesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
