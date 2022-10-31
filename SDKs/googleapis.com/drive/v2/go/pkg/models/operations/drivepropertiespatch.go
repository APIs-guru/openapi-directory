package operations

import (
"openapi/pkg/models/shared")

type DrivePropertiesPatchPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    PropertyKey string `pathParam:"style=simple,explode=false,name=propertyKey"`
    
}

type DrivePropertiesPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    Visibility *string `queryParam:"style=form,explode=true,name=visibility"`
    
}

type DrivePropertiesPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesPatchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesPatchSecurity struct {
    Option1 *DrivePropertiesPatchSecurityOption1 `security:"option"`
    Option2 *DrivePropertiesPatchSecurityOption2 `security:"option"`
    Option3 *DrivePropertiesPatchSecurityOption3 `security:"option"`
    Option4 *DrivePropertiesPatchSecurityOption4 `security:"option"`
    
}

type DrivePropertiesPatchRequest struct {
    PathParams DrivePropertiesPatchPathParams 
    QueryParams DrivePropertiesPatchQueryParams 
    Request *shared.Property `request:"mediaType=application/json"`
    Security DrivePropertiesPatchSecurity 
    
}

type DrivePropertiesPatchResponse struct {
    ContentType string 
    Property *shared.Property 
    StatusCode int64 
    
}

