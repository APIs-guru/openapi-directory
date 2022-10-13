package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsServicesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type FirebaseappcheckProjectsServicesGetQueryParams struct {
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

type FirebaseappcheckProjectsServicesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsServicesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsServicesGetSecurity struct {
	Option1 *FirebaseappcheckProjectsServicesGetSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsServicesGetSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsServicesGetRequest struct {
	PathParams  FirebaseappcheckProjectsServicesGetPathParams
	QueryParams FirebaseappcheckProjectsServicesGetQueryParams
	Security    FirebaseappcheckProjectsServicesGetSecurity
}

type FirebaseappcheckProjectsServicesGetResponse struct {
	ContentType                     string
	GoogleFirebaseAppcheckV1Service *shared.GoogleFirebaseAppcheckV1Service
	StatusCode                      int64
}
