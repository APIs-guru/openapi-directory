package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams struct {
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

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity struct {
	Option1 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest struct {
	PathParams  DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams
	QueryParams DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams
	Request     *shared.GoogleCloudDialogflowV2SuggestArticlesRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity
}

type DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse struct {
	ContentType                                    string
	GoogleCloudDialogflowV2SuggestArticlesResponse *shared.GoogleCloudDialogflowV2SuggestArticlesResponse
	StatusCode                                     int64
}
