package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsGetAutoForwardingPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsGetAutoForwardingQueryParams struct {
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

type GmailUsersSettingsGetAutoForwardingSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetAutoForwardingSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetAutoForwardingSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetAutoForwardingSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetAutoForwardingSecurity struct {
    Option1 *GmailUsersSettingsGetAutoForwardingSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsGetAutoForwardingSecurityOption2 `security:"option"`
    Option3 *GmailUsersSettingsGetAutoForwardingSecurityOption3 `security:"option"`
    Option4 *GmailUsersSettingsGetAutoForwardingSecurityOption4 `security:"option"`
    
}

type GmailUsersSettingsGetAutoForwardingRequest struct {
    PathParams GmailUsersSettingsGetAutoForwardingPathParams 
    QueryParams GmailUsersSettingsGetAutoForwardingQueryParams 
    Security GmailUsersSettingsGetAutoForwardingSecurity 
    
}

type GmailUsersSettingsGetAutoForwardingResponse struct {
    AutoForwarding *shared.AutoForwarding 
    ContentType string 
    StatusCode int64 
    
}

