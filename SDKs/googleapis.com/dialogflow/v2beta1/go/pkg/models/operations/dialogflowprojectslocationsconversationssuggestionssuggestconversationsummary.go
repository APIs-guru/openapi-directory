package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams struct {
    Conversation string `pathParam:"style=simple,explode=false,name=conversation"`
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity struct {
    Option1 *DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest struct {
    PathParams DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams 
    QueryParams DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams 
    Request *shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity 
    
}

type DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse *shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse 
    StatusCode int64 
    
}

