package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams struct {
    ConversationProfile string `pathParam:"style=simple,explode=false,name=conversationProfile"`
    
}

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams struct {
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

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity struct {
    Option1 *DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest struct {
    PathParams DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams 
    QueryParams DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams 
    Request *shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity 
    
}

type DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

