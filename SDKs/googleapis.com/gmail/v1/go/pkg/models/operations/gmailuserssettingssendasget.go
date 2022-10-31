package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsSendAsGetPathParams struct {
    SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsSendAsGetQueryParams struct {
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

type GmailUsersSettingsSendAsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsGetSecurity struct {
    Option1 *GmailUsersSettingsSendAsGetSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsSendAsGetSecurityOption2 `security:"option"`
    Option3 *GmailUsersSettingsSendAsGetSecurityOption3 `security:"option"`
    Option4 *GmailUsersSettingsSendAsGetSecurityOption4 `security:"option"`
    
}

type GmailUsersSettingsSendAsGetRequest struct {
    PathParams GmailUsersSettingsSendAsGetPathParams 
    QueryParams GmailUsersSettingsSendAsGetQueryParams 
    Security GmailUsersSettingsSendAsGetSecurity 
    
}

type GmailUsersSettingsSendAsGetResponse struct {
    ContentType string 
    SendAs *shared.SendAs 
    StatusCode int64 
    
}

