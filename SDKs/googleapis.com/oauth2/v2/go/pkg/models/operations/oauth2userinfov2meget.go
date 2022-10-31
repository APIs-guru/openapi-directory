package operations

import (
"openapi/pkg/models/shared")

type Oauth2UserinfoV2MeGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type Oauth2UserinfoV2MeGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Oauth2UserinfoV2MeGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Oauth2UserinfoV2MeGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Oauth2UserinfoV2MeGetSecurity struct {
    Option1 *Oauth2UserinfoV2MeGetSecurityOption1 `security:"option"`
    Option2 *Oauth2UserinfoV2MeGetSecurityOption2 `security:"option"`
    Option3 *Oauth2UserinfoV2MeGetSecurityOption3 `security:"option"`
    
}

type Oauth2UserinfoV2MeGetRequest struct {
    QueryParams Oauth2UserinfoV2MeGetQueryParams 
    Security Oauth2UserinfoV2MeGetSecurity 
    
}

type Oauth2UserinfoV2MeGetResponse struct {
    ContentType string 
    StatusCode int64 
    Userinfo *shared.Userinfo 
    
}

