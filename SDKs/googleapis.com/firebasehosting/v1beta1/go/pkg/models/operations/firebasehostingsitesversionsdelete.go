package operations

import (
	"openapi/pkg/models/shared"
)

type FirebasehostingSitesVersionsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebasehostingSitesVersionsDeleteQueryParams struct {
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

type FirebasehostingSitesVersionsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesVersionsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebasehostingSitesVersionsDeleteSecurity struct {
	Option1 *FirebasehostingSitesVersionsDeleteSecurityOption1 `security:"option"`
	Option2 *FirebasehostingSitesVersionsDeleteSecurityOption2 `security:"option"`
}

type FirebasehostingSitesVersionsDeleteRequest struct {
	PathParams  FirebasehostingSitesVersionsDeletePathParams
	QueryParams FirebasehostingSitesVersionsDeleteQueryParams
	Security    FirebasehostingSitesVersionsDeleteSecurity
}

type FirebasehostingSitesVersionsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
