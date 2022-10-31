package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams struct {
    Participant string `pathParam:"style=simple,explode=false,name=participant"`
    
}

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams struct {
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

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity struct {
    Option1 *DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest struct {
    PathParams DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams 
    QueryParams DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams 
    Request *shared.GoogleCloudDialogflowV2beta1AnalyzeContentRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity 
    
}

type DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1AnalyzeContentResponse *shared.GoogleCloudDialogflowV2beta1AnalyzeContentResponse 
    StatusCode int64 
    
}

