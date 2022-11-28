package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	ConversationID *string           `queryParam:"style=form,explode=true,name=conversationId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsConversationsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1ConversationInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsCreateSecurity
}

type DialogflowProjectsLocationsConversationsCreateResponse struct {
	ContentType                              string
	GoogleCloudDialogflowV2beta1Conversation *shared.GoogleCloudDialogflowV2beta1Conversation
	StatusCode                               int64
}
