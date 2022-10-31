package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsIosAppsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseProjectsIosAppsCreateQueryParams struct {
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

type FirebaseProjectsIosAppsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsIosAppsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsIosAppsCreateSecurity struct {
	Option1 *FirebaseProjectsIosAppsCreateSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsIosAppsCreateSecurityOption2 `security:"option"`
}

type FirebaseProjectsIosAppsCreateRequest struct {
	PathParams  FirebaseProjectsIosAppsCreatePathParams
	QueryParams FirebaseProjectsIosAppsCreateQueryParams
	Request     *shared.IosApp `request:"mediaType=application/json"`
	Security    FirebaseProjectsIosAppsCreateSecurity
}

type FirebaseProjectsIosAppsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
