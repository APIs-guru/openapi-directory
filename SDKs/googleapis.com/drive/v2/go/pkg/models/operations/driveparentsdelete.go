package operations

import (
"openapi/pkg/models/shared")

type DriveParentsDeletePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    ParentID string `pathParam:"style=simple,explode=false,name=parentId"`
    
}

type DriveParentsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveParentsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveParentsDeleteSecurity struct {
    Option1 *DriveParentsDeleteSecurityOption1 `security:"option"`
    Option2 *DriveParentsDeleteSecurityOption2 `security:"option"`
    
}

type DriveParentsDeleteRequest struct {
    PathParams DriveParentsDeletePathParams 
    QueryParams DriveParentsDeleteQueryParams 
    Security DriveParentsDeleteSecurity 
    
}

type DriveParentsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

