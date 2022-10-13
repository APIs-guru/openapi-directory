package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams struct {
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

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams
	QueryParams DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse struct {
	ContentType                                           string
	GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse *shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse
	StatusCode                                            int64
}
