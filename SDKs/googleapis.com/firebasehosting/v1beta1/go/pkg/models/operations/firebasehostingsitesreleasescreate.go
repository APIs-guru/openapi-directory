package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasehostingSitesReleasesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebasehostingSitesReleasesCreateQueryParams struct {
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
	VersionName    *string           `queryParam:"style=form,explode=true,name=versionName"`
}

type FirebasehostingSitesReleasesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesReleasesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesReleasesCreateSecurity struct {
	Option1 *FirebasehostingSitesReleasesCreateSecurityOption1 `security:"option"`
	Option2 *FirebasehostingSitesReleasesCreateSecurityOption2 `security:"option"`
}

type FirebasehostingSitesReleasesCreateRequest struct {
	PathParams  FirebasehostingSitesReleasesCreatePathParams
	QueryParams FirebasehostingSitesReleasesCreateQueryParams
	Request     *shared.Release `request:"mediaType=application/json"`
	Security    FirebasehostingSitesReleasesCreateSecurity
}

type FirebasehostingSitesReleasesCreateResponse struct {
	ContentType string
	Release     *shared.Release
	StatusCode  int64
}
