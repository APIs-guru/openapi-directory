package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsSendAsPatchPathParams struct {
    SendAsEmail string `pathParam:"style=simple,explode=false,name=sendAsEmail"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsSendAsPatchQueryParams struct {
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

type GmailUsersSettingsSendAsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsSendAsPatchSecurity struct {
    Option1 *GmailUsersSettingsSendAsPatchSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsSendAsPatchSecurityOption2 `security:"option"`
    
}

type GmailUsersSettingsSendAsPatchRequest struct {
    PathParams GmailUsersSettingsSendAsPatchPathParams 
    QueryParams GmailUsersSettingsSendAsPatchQueryParams 
    Request *shared.SendAs `request:"mediaType=application/json"`
    Security GmailUsersSettingsSendAsPatchSecurity 
    
}

type GmailUsersSettingsSendAsPatchResponse struct {
    ContentType string 
    SendAs *shared.SendAs 
    StatusCode int64 
    
}

