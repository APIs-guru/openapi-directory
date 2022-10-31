package operations

import (
"openapi/pkg/models/shared")

type GmailUsersMessagesAttachmentsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersMessagesAttachmentsGetQueryParams struct {
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

type GmailUsersMessagesAttachmentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesAttachmentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesAttachmentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesAttachmentsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesAttachmentsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesAttachmentsGetSecurity struct {
    Option1 *GmailUsersMessagesAttachmentsGetSecurityOption1 `security:"option"`
    Option2 *GmailUsersMessagesAttachmentsGetSecurityOption2 `security:"option"`
    Option3 *GmailUsersMessagesAttachmentsGetSecurityOption3 `security:"option"`
    Option4 *GmailUsersMessagesAttachmentsGetSecurityOption4 `security:"option"`
    Option5 *GmailUsersMessagesAttachmentsGetSecurityOption5 `security:"option"`
    
}

type GmailUsersMessagesAttachmentsGetRequest struct {
    PathParams GmailUsersMessagesAttachmentsGetPathParams 
    QueryParams GmailUsersMessagesAttachmentsGetQueryParams 
    Security GmailUsersMessagesAttachmentsGetSecurity 
    
}

type GmailUsersMessagesAttachmentsGetResponse struct {
    ContentType string 
    MessagePartBody *shared.MessagePartBody 
    StatusCode int64 
    
}

