package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsAndroidAppsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseProjectsAndroidAppsCreateQueryParams struct {
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

type FirebaseProjectsAndroidAppsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAndroidAppsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAndroidAppsCreateSecurity struct {
	Option1 *FirebaseProjectsAndroidAppsCreateSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsAndroidAppsCreateSecurityOption2 `security:"option"`
}

type FirebaseProjectsAndroidAppsCreateRequest struct {
	PathParams  FirebaseProjectsAndroidAppsCreatePathParams
	QueryParams FirebaseProjectsAndroidAppsCreateQueryParams
	Request     *shared.AndroidApp `request:"mediaType=application/json"`
	Security    FirebaseProjectsAndroidAppsCreateSecurity
}

type FirebaseProjectsAndroidAppsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
