package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsConversationsCompletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsConversationsCompleteQueryParams struct {
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

type DialogflowProjectsLocationsConversationsCompleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsCompleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsConversationsCompleteSecurity struct {
    Option1 *DialogflowProjectsLocationsConversationsCompleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsConversationsCompleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsConversationsCompleteRequest struct {
    PathParams DialogflowProjectsLocationsConversationsCompletePathParams 
    QueryParams DialogflowProjectsLocationsConversationsCompleteQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsConversationsCompleteSecurity 
    
}

type DialogflowProjectsLocationsConversationsCompleteResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2Conversation *shared.GoogleCloudDialogflowV2Conversation 
    StatusCode int64 
    
}

