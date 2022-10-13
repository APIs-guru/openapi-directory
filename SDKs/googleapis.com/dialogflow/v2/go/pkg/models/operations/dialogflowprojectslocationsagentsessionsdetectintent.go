package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams struct {
	Session string `pathParam:"style=simple,explode=false,name=session"`
}

type DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams struct {
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

type DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentSessionsDetectIntentRequest struct {
	PathParams  DialogflowProjectsLocationsAgentSessionsDetectIntentPathParams
	QueryParams DialogflowProjectsLocationsAgentSessionsDetectIntentQueryParams
	Request     *shared.GoogleCloudDialogflowV2DetectIntentRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity
}

type DialogflowProjectsLocationsAgentSessionsDetectIntentResponse struct {
	ContentType                                 string
	GoogleCloudDialogflowV2DetectIntentResponse *shared.GoogleCloudDialogflowV2DetectIntentResponse
	StatusCode                                  int64
}
