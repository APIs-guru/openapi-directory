package operations

import (
"openapi/pkg/models/shared")

type DriveParentsGetPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    ParentID string `pathParam:"style=simple,explode=false,name=parentId"`
    
}

type DriveParentsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveParentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsGetSecurity struct {
    Option1 *DriveParentsGetSecurityOption1 `security:"option"`
    Option2 *DriveParentsGetSecurityOption2 `security:"option"`
    Option3 *DriveParentsGetSecurityOption3 `security:"option"`
    Option4 *DriveParentsGetSecurityOption4 `security:"option"`
    Option5 *DriveParentsGetSecurityOption5 `security:"option"`
    Option6 *DriveParentsGetSecurityOption6 `security:"option"`
    Option7 *DriveParentsGetSecurityOption7 `security:"option"`
    
}

type DriveParentsGetRequest struct {
    PathParams DriveParentsGetPathParams 
    QueryParams DriveParentsGetQueryParams 
    Security DriveParentsGetSecurity 
    
}

type DriveParentsGetResponse struct {
    ContentType string 
    ParentReference *shared.ParentReference 
    StatusCode int64 
    
}

