package operations

import (
	"openapi/pkg/models/shared"
)

type ChromepolicyCustomersPolicySchemasGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ChromepolicyCustomersPolicySchemasGetQueryParams struct {
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

type ChromepolicyCustomersPolicySchemasGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPolicySchemasGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ChromepolicyCustomersPolicySchemasGetSecurity struct {
	Option1 *ChromepolicyCustomersPolicySchemasGetSecurityOption1 `security:"option"`
	Option2 *ChromepolicyCustomersPolicySchemasGetSecurityOption2 `security:"option"`
}

type ChromepolicyCustomersPolicySchemasGetRequest struct {
	PathParams  ChromepolicyCustomersPolicySchemasGetPathParams
	QueryParams ChromepolicyCustomersPolicySchemasGetQueryParams
	Security    ChromepolicyCustomersPolicySchemasGetSecurity
}

type ChromepolicyCustomersPolicySchemasGetResponse struct {
	ContentType                              string
	GoogleChromePolicyVersionsV1PolicySchema *shared.GoogleChromePolicyVersionsV1PolicySchema
	StatusCode                               int64
}
