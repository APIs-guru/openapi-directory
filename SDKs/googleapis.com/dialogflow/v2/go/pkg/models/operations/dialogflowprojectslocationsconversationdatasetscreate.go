package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationDatasetsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationDatasetsCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationDatasetsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationDatasetsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationDatasetsCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationDatasetsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2ConversationDatasetInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationDatasetsCreateSecurity
}

type DialogflowProjectsLocationsConversationDatasetsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
