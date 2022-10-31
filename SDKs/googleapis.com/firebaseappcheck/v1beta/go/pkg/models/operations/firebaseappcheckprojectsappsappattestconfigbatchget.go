package operations

import (
	"openapi/pkg/models/shared"
)

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams struct {
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

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity struct {
	Option1 *FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1 `security:"option"`
	Option2 *FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2 `security:"option"`
}

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest struct {
	PathParams  FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams
	QueryParams FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams
	Security    FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity
}

type FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse struct {
	ContentType                                                  string
	GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse *shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
	StatusCode                                                   int64
}
