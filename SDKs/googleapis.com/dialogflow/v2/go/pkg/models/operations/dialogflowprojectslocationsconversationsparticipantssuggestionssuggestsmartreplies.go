package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams struct {
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

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams
	QueryParams DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams
	Request     *shared.GoogleCloudDialogflowV2SuggestSmartRepliesRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse struct {
	ContentType                                        string
	GoogleCloudDialogflowV2SuggestSmartRepliesResponse *shared.GoogleCloudDialogflowV2SuggestSmartRepliesResponse
	StatusCode                                         int64
}
