package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsAddGoogleAnalyticsPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseProjectsAddGoogleAnalyticsQueryParams struct {
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

type FirebaseProjectsAddGoogleAnalyticsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAddGoogleAnalyticsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsAddGoogleAnalyticsSecurity struct {
	Option1 *FirebaseProjectsAddGoogleAnalyticsSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsAddGoogleAnalyticsSecurityOption2 `security:"option"`
}

type FirebaseProjectsAddGoogleAnalyticsRequest struct {
	PathParams  FirebaseProjectsAddGoogleAnalyticsPathParams
	QueryParams FirebaseProjectsAddGoogleAnalyticsQueryParams
	Request     *shared.AddGoogleAnalyticsRequest `request:"mediaType=application/json"`
	Security    FirebaseProjectsAddGoogleAnalyticsSecurity
}

type FirebaseProjectsAddGoogleAnalyticsResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
