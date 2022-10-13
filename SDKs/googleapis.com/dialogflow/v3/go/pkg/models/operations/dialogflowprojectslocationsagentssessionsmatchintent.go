package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams struct {
	Session string `pathParam:"style=simple,explode=false,name=session"`
}

type DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams struct {
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

type DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsSessionsMatchIntentPathParams
	QueryParams DialogflowProjectsLocationsAgentsSessionsMatchIntentQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3MatchIntentRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsSessionsMatchIntentSecurity
}

type DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse struct {
	ContentType                                  string
	GoogleCloudDialogflowCxV3MatchIntentResponse *shared.GoogleCloudDialogflowCxV3MatchIntentResponse
	StatusCode                                   int64
}
