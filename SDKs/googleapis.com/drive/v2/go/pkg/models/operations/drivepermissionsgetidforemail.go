package operations

import (
"openapi/pkg/models/shared")

type DrivePermissionsGetIDForEmailPathParams struct {
    Email string `pathParam:"style=simple,explode=false,name=email"`
    
}

type DrivePermissionsGetIDForEmailQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePermissionsGetIDForEmailSecurity struct {
    Option1 *DrivePermissionsGetIDForEmailSecurityOption1 `security:"option"`
    Option2 *DrivePermissionsGetIDForEmailSecurityOption2 `security:"option"`
    Option3 *DrivePermissionsGetIDForEmailSecurityOption3 `security:"option"`
    Option4 *DrivePermissionsGetIDForEmailSecurityOption4 `security:"option"`
    Option5 *DrivePermissionsGetIDForEmailSecurityOption5 `security:"option"`
    Option6 *DrivePermissionsGetIDForEmailSecurityOption6 `security:"option"`
    Option7 *DrivePermissionsGetIDForEmailSecurityOption7 `security:"option"`
    Option8 *DrivePermissionsGetIDForEmailSecurityOption8 `security:"option"`
    
}

type DrivePermissionsGetIDForEmailRequest struct {
    PathParams DrivePermissionsGetIDForEmailPathParams 
    QueryParams DrivePermissionsGetIDForEmailQueryParams 
    Security DrivePermissionsGetIDForEmailSecurity 
    
}

type DrivePermissionsGetIDForEmailResponse struct {
    ContentType string 
    PermissionID *shared.PermissionID 
    StatusCode int64 
    
}

