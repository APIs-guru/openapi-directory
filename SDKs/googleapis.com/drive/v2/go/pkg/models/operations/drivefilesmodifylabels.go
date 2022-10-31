package operations

import (
"openapi/pkg/models/shared")

type DriveFilesModifyLabelsPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DriveFilesModifyLabelsQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveFilesModifyLabelsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesModifyLabelsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesModifyLabelsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveFilesModifyLabelsSecurity struct {
    Option1 *DriveFilesModifyLabelsSecurityOption1 `security:"option"`
    Option2 *DriveFilesModifyLabelsSecurityOption2 `security:"option"`
    Option3 *DriveFilesModifyLabelsSecurityOption3 `security:"option"`
    
}

type DriveFilesModifyLabelsRequest struct {
    PathParams DriveFilesModifyLabelsPathParams 
    QueryParams DriveFilesModifyLabelsQueryParams 
    Request *shared.ModifyLabelsRequest `request:"mediaType=application/json"`
    Security DriveFilesModifyLabelsSecurity 
    
}

type DriveFilesModifyLabelsResponse struct {
    ContentType string 
    ModifyLabelsResponse *shared.ModifyLabelsResponse 
    StatusCode int64 
    
}

