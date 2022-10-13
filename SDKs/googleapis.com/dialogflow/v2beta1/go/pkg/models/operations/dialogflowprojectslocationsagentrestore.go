package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentRestorePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentRestoreQueryParams struct {
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

type DialogflowProjectsLocationsAgentRestoreSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentRestoreSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentRestoreSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentRestoreSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentRestoreSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentRestoreRequest struct {
	PathParams  DialogflowProjectsLocationsAgentRestorePathParams
	QueryParams DialogflowProjectsLocationsAgentRestoreQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1RestoreAgentRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentRestoreSecurity
}

type DialogflowProjectsLocationsAgentRestoreResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
