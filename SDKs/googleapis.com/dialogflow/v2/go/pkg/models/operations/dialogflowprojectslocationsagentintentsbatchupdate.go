package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams struct {
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

type DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams
	QueryParams DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams
	Request     *shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity
}

type DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
