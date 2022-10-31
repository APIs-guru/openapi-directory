package operations

import (
"openapi/pkg/models/shared")

type GmailUsersMessagesModifyPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersMessagesModifyQueryParams struct {
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

type GmailUsersMessagesModifySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesModifySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesModifySecurity struct {
    Option1 *GmailUsersMessagesModifySecurityOption1 `security:"option"`
    Option2 *GmailUsersMessagesModifySecurityOption2 `security:"option"`
    
}

type GmailUsersMessagesModifyRequest struct {
    PathParams GmailUsersMessagesModifyPathParams 
    QueryParams GmailUsersMessagesModifyQueryParams 
    Request *shared.ModifyMessageRequest `request:"mediaType=application/json"`
    Security GmailUsersMessagesModifySecurity 
    
}

type GmailUsersMessagesModifyResponse struct {
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

