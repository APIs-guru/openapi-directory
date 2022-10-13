package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseProjectsRemoveAnalyticsPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseProjectsRemoveAnalyticsQueryParams struct {
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

type FirebaseProjectsRemoveAnalyticsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsRemoveAnalyticsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseProjectsRemoveAnalyticsSecurity struct {
	Option1 *FirebaseProjectsRemoveAnalyticsSecurityOption1 `security:"option"`
	Option2 *FirebaseProjectsRemoveAnalyticsSecurityOption2 `security:"option"`
}

type FirebaseProjectsRemoveAnalyticsRequest struct {
	PathParams  FirebaseProjectsRemoveAnalyticsPathParams
	QueryParams FirebaseProjectsRemoveAnalyticsQueryParams
	Request     *shared.RemoveAnalyticsRequest `request:"mediaType=application/json"`
	Security    FirebaseProjectsRemoveAnalyticsSecurity
}

type FirebaseProjectsRemoveAnalyticsResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
