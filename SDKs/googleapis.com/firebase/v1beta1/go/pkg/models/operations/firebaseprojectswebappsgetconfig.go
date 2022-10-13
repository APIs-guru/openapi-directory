package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsWebAppsGetConfigPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebaseProjectsWebAppsGetConfigQueryParams struct {
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

type FirebaseProjectsWebAppsGetConfigSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsWebAppsGetConfigSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsWebAppsGetConfigSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsWebAppsGetConfigSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsWebAppsGetConfigSecurity struct {
	Option1 *FirebaseProjectsWebAppsGetConfigSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsWebAppsGetConfigSecurityOption2 `security:"option"`
	Option3 *FirebaseProjectsWebAppsGetConfigSecurityOption3 `security:"option"`
	Option4 *FirebaseProjectsWebAppsGetConfigSecurityOption4 `security:"option"`
}

type FirebaseProjectsWebAppsGetConfigRequest struct {
	PathParams  FirebaseProjectsWebAppsGetConfigPathParams
	QueryParams FirebaseProjectsWebAppsGetConfigQueryParams
	Security    FirebaseProjectsWebAppsGetConfigSecurity
}

type FirebaseProjectsWebAppsGetConfigResponse struct {
	ContentType  string
	StatusCode   int64
	WebAppConfig *shared.WebAppConfig
}
