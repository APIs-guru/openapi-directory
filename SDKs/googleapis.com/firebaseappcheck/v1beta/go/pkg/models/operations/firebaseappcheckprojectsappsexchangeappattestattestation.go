package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams struct {
	App string `pathParam:"style=simple,explode=false,name=app"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest struct {
	PathParams  FirebaseappcheckProjectsAppsExchangeAppAttestAttestationPathParams
	QueryParams FirebaseappcheckProjectsAppsExchangeAppAttestAttestationQueryParams
	Request     *shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest `request:"mediaType=application/json"`
	Security    FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity
}

type FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse struct {
	ContentType                                                      string
	GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse *shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
	StatusCode                                                       int64
}
