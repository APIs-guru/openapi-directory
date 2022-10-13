package operations

import (
	"openapi/pkg/models/shared"
)

type SasportalPoliciesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SasportalPoliciesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalPoliciesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalPoliciesGetSecurity struct {
	Option1 *SasportalPoliciesGetSecurityOption1 `security:"option"`
	Option2 *SasportalPoliciesGetSecurityOption2 `security:"option"`
}

type SasportalPoliciesGetRequest struct {
	QueryParams SasportalPoliciesGetQueryParams
	Request     *shared.SasPortalGetPolicyRequest `request:"mediaType=application/json"`
	Security    SasportalPoliciesGetSecurity
}

type SasportalPoliciesGetResponse struct {
	ContentType     string
	SasPortalPolicy *shared.SasPortalPolicy
	StatusCode      int64
}
