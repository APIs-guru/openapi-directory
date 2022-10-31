package operations

import (
"openapi/pkg/models/shared")

type DriveFilesEmptyTrashQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    EnforceSingleParent *bool `queryParam:"style=form,explode=true,name=enforceSingleParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesEmptyTrashSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesEmptyTrashRequest struct {
    QueryParams DriveFilesEmptyTrashQueryParams 
    Security DriveFilesEmptyTrashSecurity 
    
}

type DriveFilesEmptyTrashResponse struct {
    ContentType string 
    StatusCode int64 
    
}

