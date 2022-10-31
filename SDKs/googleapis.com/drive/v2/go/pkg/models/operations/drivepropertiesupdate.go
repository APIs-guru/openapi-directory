package operations

import (
"openapi/pkg/models/shared")

type DrivePropertiesUpdatePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    PropertyKey string `pathParam:"style=simple,explode=false,name=propertyKey"`
    
}

type DrivePropertiesUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    Visibility *string `queryParam:"style=form,explode=true,name=visibility"`
    
}

type DrivePropertiesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesUpdateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesUpdateSecurity struct {
    Option1 *DrivePropertiesUpdateSecurityOption1 `security:"option"`
    Option2 *DrivePropertiesUpdateSecurityOption2 `security:"option"`
    Option3 *DrivePropertiesUpdateSecurityOption3 `security:"option"`
    Option4 *DrivePropertiesUpdateSecurityOption4 `security:"option"`
    
}

type DrivePropertiesUpdateRequest struct {
    PathParams DrivePropertiesUpdatePathParams 
    QueryParams DrivePropertiesUpdateQueryParams 
    Request *shared.Property `request:"mediaType=application/json"`
    Security DrivePropertiesUpdateSecurity 
    
}

type DrivePropertiesUpdateResponse struct {
    ContentType string 
    Property *shared.Property 
    StatusCode int64 
    
}

