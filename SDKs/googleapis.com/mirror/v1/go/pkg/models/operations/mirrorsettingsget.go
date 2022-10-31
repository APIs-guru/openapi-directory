package operations

import (
"openapi/pkg/models/shared")

type MirrorSettingsGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MirrorSettingsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type MirrorSettingsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorSettingsGetRequest struct {
    PathParams MirrorSettingsGetPathParams 
    QueryParams MirrorSettingsGetQueryParams 
    Security MirrorSettingsGetSecurity 
    
}

type MirrorSettingsGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

