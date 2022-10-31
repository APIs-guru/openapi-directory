package operations

import (
"openapi/pkg/models/shared")

type DriveChildrenGetPathParams struct {
    ChildID string `pathParam:"style=simple,explode=false,name=childId"`
    FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
    
}

type DriveChildrenGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveChildrenGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenGetSecurity struct {
    Option1 *DriveChildrenGetSecurityOption1 `security:"option"`
    Option2 *DriveChildrenGetSecurityOption2 `security:"option"`
    Option3 *DriveChildrenGetSecurityOption3 `security:"option"`
    Option4 *DriveChildrenGetSecurityOption4 `security:"option"`
    Option5 *DriveChildrenGetSecurityOption5 `security:"option"`
    Option6 *DriveChildrenGetSecurityOption6 `security:"option"`
    Option7 *DriveChildrenGetSecurityOption7 `security:"option"`
    
}

type DriveChildrenGetRequest struct {
    PathParams DriveChildrenGetPathParams 
    QueryParams DriveChildrenGetQueryParams 
    Security DriveChildrenGetSecurity 
    
}

type DriveChildrenGetResponse struct {
    ChildReference *shared.ChildReference 
    ContentType string 
    StatusCode int64 
    
}

