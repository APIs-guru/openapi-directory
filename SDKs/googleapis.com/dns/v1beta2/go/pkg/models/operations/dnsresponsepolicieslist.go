package operations

import (
	"openapi/pkg/models/shared"
)

type DNSResponsePoliciesListPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DNSResponsePoliciesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DNSResponsePoliciesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DNSResponsePoliciesListSecurity struct {
	Option1 *DNSResponsePoliciesListSecurityOption1 `security:"option"`
	Option2 *DNSResponsePoliciesListSecurityOption2 `security:"option"`
	Option3 *DNSResponsePoliciesListSecurityOption3 `security:"option"`
	Option4 *DNSResponsePoliciesListSecurityOption4 `security:"option"`
}

type DNSResponsePoliciesListRequest struct {
	PathParams  DNSResponsePoliciesListPathParams
	QueryParams DNSResponsePoliciesListQueryParams
	Security    DNSResponsePoliciesListSecurity
}

type DNSResponsePoliciesListResponse struct {
	ContentType                  string
	ResponsePoliciesListResponse *shared.ResponsePoliciesListResponse
	StatusCode                   int64
}
