package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Names          []string          `queryParam:"style=form,explode=true,name=names"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest struct {
	PathParams  FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams
	QueryParams FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams
	Security    FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity
}

type FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse struct {
	ContentType                                                  string
	GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse *shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
	StatusCode                                                   int64
}
