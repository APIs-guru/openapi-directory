package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaserulesProjectsReleasesCreatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebaserulesProjectsReleasesCreateQueryParams struct {
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

type FirebaserulesProjectsReleasesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaserulesProjectsReleasesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaserulesProjectsReleasesCreateSecurity struct {
	Option1 *FirebaserulesProjectsReleasesCreateSecurityOption1 `security:"option"`
	Option2 *FirebaserulesProjectsReleasesCreateSecurityOption2 `security:"option"`
}

type FirebaserulesProjectsReleasesCreateRequest struct {
	PathParams  FirebaserulesProjectsReleasesCreatePathParams
	QueryParams FirebaserulesProjectsReleasesCreateQueryParams
	Request     *shared.ReleaseInput `request:"mediaType=application/json"`
	Security    FirebaserulesProjectsReleasesCreateSecurity
}

type FirebaserulesProjectsReleasesCreateResponse struct {
	ContentType string
	Release     *shared.Release
	StatusCode  int64
}
