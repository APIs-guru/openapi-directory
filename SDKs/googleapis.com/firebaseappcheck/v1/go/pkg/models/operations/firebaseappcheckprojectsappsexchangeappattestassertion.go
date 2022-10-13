package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams struct {
	App string `pathParam:"style=simple,explode=false,name=app"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest struct {
	PathParams  FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams
	QueryParams FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams
	Request     *shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest `request:"mediaType=application/json"`
	Security    FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse struct {
	ContentType                           string
	GoogleFirebaseAppcheckV1AppCheckToken *shared.GoogleFirebaseAppcheckV1AppCheckToken
	StatusCode                            int64
}
