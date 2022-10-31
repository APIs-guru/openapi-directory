package operations

import (
"openapi/pkg/models/shared")

type GmailUsersGetProfilePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersGetProfileQueryParams struct {
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

type GmailUsersGetProfileSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersGetProfileSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersGetProfileSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersGetProfileSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersGetProfileSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersGetProfileSecurity struct {
    Option1 *GmailUsersGetProfileSecurityOption1 `security:"option"`
    Option2 *GmailUsersGetProfileSecurityOption2 `security:"option"`
    Option3 *GmailUsersGetProfileSecurityOption3 `security:"option"`
    Option4 *GmailUsersGetProfileSecurityOption4 `security:"option"`
    Option5 *GmailUsersGetProfileSecurityOption5 `security:"option"`
    
}

type GmailUsersGetProfileRequest struct {
    PathParams GmailUsersGetProfilePathParams 
    QueryParams GmailUsersGetProfileQueryParams 
    Security GmailUsersGetProfileSecurity 
    
}

type GmailUsersGetProfileResponse struct {
    ContentType string 
    Profile *shared.Profile 
    StatusCode int64 
    
}

