package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationModelsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationModelsCreateQueryParams struct {
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

type DialogflowProjectsLocationsConversationModelsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationModelsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationModelsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationModelsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationModelsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationModelsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsConversationModelsCreatePathParams
	QueryParams DialogflowProjectsLocationsConversationModelsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2ConversationModel `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationModelsCreateSecurity
}

type DialogflowProjectsLocationsConversationModelsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
