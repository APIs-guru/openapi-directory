package operations

import (
"openapi/pkg/models/shared")

type MirrorTimelineGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MirrorTimelineGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type MirrorTimelineGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorTimelineGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MirrorTimelineGetSecurity struct {
    Option1 *MirrorTimelineGetSecurityOption1 `security:"option"`
    Option2 *MirrorTimelineGetSecurityOption2 `security:"option"`
    
}

type MirrorTimelineGetRequest struct {
    PathParams MirrorTimelineGetPathParams 
    QueryParams MirrorTimelineGetQueryParams 
    Security MirrorTimelineGetSecurity 
    
}

type MirrorTimelineGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

