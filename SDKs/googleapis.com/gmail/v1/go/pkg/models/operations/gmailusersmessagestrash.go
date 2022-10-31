package operations

import (
"openapi/pkg/models/shared")

type GmailUsersMessagesTrashPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersMessagesTrashQueryParams struct {
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

type GmailUsersMessagesTrashSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesTrashSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesTrashSecurity struct {
    Option1 *GmailUsersMessagesTrashSecurityOption1 `security:"option"`
    Option2 *GmailUsersMessagesTrashSecurityOption2 `security:"option"`
    
}

type GmailUsersMessagesTrashRequest struct {
    PathParams GmailUsersMessagesTrashPathParams 
    QueryParams GmailUsersMessagesTrashQueryParams 
    Security GmailUsersMessagesTrashSecurity 
    
}

type GmailUsersMessagesTrashResponse struct {
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

