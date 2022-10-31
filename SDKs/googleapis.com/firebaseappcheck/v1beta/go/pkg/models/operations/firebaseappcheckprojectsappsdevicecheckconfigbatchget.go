package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams struct {
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

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest struct {
	PathParams  FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams
	QueryParams FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams
	Security    FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity
}

type FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse struct {
	ContentType                                                    string
	GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse *shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
	StatusCode                                                     int64
}
