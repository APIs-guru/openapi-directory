package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams struct {
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

type DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity struct {
    Option1 *DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest struct {
    PathParams DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams 
    QueryParams DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams 
    Request *shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity 
    
}

type DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1CompileSuggestionResponse *shared.GoogleCloudDialogflowV2beta1CompileSuggestionResponse 
    StatusCode int64 
    
}

