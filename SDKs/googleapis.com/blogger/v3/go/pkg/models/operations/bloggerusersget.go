package operations

import (
"openapi/pkg/models/shared")

type BloggerUsersGetPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type BloggerUsersGetQueryParams struct {
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

type BloggerUsersGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerUsersGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BloggerUsersGetSecurity struct {
    Option1 *BloggerUsersGetSecurityOption1 `security:"option"`
    Option2 *BloggerUsersGetSecurityOption2 `security:"option"`
    
}

type BloggerUsersGetRequest struct {
    PathParams BloggerUsersGetPathParams 
    QueryParams BloggerUsersGetQueryParams 
    Security BloggerUsersGetSecurity 
    
}

type BloggerUsersGetResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

