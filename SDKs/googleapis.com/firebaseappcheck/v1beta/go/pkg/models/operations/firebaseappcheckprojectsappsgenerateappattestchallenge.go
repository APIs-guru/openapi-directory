package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams struct {
	App string `pathParam:"style=simple,explode=false,name=app"`
}

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams struct {
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

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest struct {
	PathParams  FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams
	QueryParams FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity
}

type FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse struct {
	ContentType                                                    string
	GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse *shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
	StatusCode                                                     int64
}
