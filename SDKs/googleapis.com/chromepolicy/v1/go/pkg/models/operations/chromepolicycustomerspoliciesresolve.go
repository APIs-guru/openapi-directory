package operations

import (
	"openapi/pkg/models/shared"
)

type ChromepolicyCustomersPoliciesResolvePathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type ChromepolicyCustomersPoliciesResolveQueryParams struct {
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

type ChromepolicyCustomersPoliciesResolveSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPoliciesResolveSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPoliciesResolveSecurity struct {
	Option1 *ChromepolicyCustomersPoliciesResolveSecurityOption1 `security:"option"`
	Option2 *ChromepolicyCustomersPoliciesResolveSecurityOption2 `security:"option"`
}

type ChromepolicyCustomersPoliciesResolveRequest struct {
	PathParams  ChromepolicyCustomersPoliciesResolvePathParams
	QueryParams ChromepolicyCustomersPoliciesResolveQueryParams
	Request     *shared.GoogleChromePolicyVersionsV1ResolveRequest `request:"mediaType=application/json"`
	Security    ChromepolicyCustomersPoliciesResolveSecurity
}

type ChromepolicyCustomersPoliciesResolveResponse struct {
	ContentType                                 string
	GoogleChromePolicyVersionsV1ResolveResponse *shared.GoogleChromePolicyVersionsV1ResolveResponse
	StatusCode                                  int64
}
