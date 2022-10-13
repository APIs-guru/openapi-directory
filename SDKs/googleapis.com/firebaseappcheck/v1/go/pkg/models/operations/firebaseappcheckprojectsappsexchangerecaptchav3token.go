package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams struct {
	App string `pathParam:"style=simple,explode=false,name=app"`
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest struct {
	PathParams  FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams
	QueryParams FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams
	Request     *shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest `request:"mediaType=application/json"`
	Security    FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse struct {
	ContentType                           string
	GoogleFirebaseAppcheckV1AppCheckToken *shared.GoogleFirebaseAppcheckV1AppCheckToken
	StatusCode                            int64
}
