package operations

import (
"openapi/pkg/models/shared")

type DriveChildrenInsertPathParams struct {
    FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
    
}

type DriveChildrenInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveChildrenInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenInsertSecurity struct {
    Option1 *DriveChildrenInsertSecurityOption1 `security:"option"`
    Option2 *DriveChildrenInsertSecurityOption2 `security:"option"`
    Option3 *DriveChildrenInsertSecurityOption3 `security:"option"`
    
}

type DriveChildrenInsertRequest struct {
    PathParams DriveChildrenInsertPathParams 
    QueryParams DriveChildrenInsertQueryParams 
    Request *shared.ChildReference `request:"mediaType=application/json"`
    Security DriveChildrenInsertSecurity 
    
}

type DriveChildrenInsertResponse struct {
    ChildReference *shared.ChildReference 
    ContentType string 
    StatusCode int64 
    
}

