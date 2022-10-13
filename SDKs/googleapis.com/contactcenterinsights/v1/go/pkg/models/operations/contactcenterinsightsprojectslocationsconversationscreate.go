package operations

import (
	"openapi/pkg/models/shared"
)

type ContactcenterinsightsProjectsLocationsConversationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams struct {
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

type ContactcenterinsightsProjectsLocationsConversationsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContactcenterinsightsProjectsLocationsConversationsCreateRequest struct {
	PathParams  ContactcenterinsightsProjectsLocationsConversationsCreatePathParams
	QueryParams ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams
	Request     *shared.GoogleCloudContactcenterinsightsV1Conversation `request:"mediaType=application/json"`
	Security    ContactcenterinsightsProjectsLocationsConversationsCreateSecurity
}

type ContactcenterinsightsProjectsLocationsConversationsCreateResponse struct {
	ContentType                                    string
	GoogleCloudContactcenterinsightsV1Conversation *shared.GoogleCloudContactcenterinsightsV1Conversation
	StatusCode                                     int64
}
