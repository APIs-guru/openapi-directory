package operations

import (
"openapi/pkg/models/shared")

type DrivePropertiesListPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DrivePropertiesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DrivePropertiesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DrivePropertiesListSecurity struct {
    Option1 *DrivePropertiesListSecurityOption1 `security:"option"`
    Option2 *DrivePropertiesListSecurityOption2 `security:"option"`
    Option3 *DrivePropertiesListSecurityOption3 `security:"option"`
    Option4 *DrivePropertiesListSecurityOption4 `security:"option"`
    Option5 *DrivePropertiesListSecurityOption5 `security:"option"`
    Option6 *DrivePropertiesListSecurityOption6 `security:"option"`
    Option7 *DrivePropertiesListSecurityOption7 `security:"option"`
    
}

type DrivePropertiesListRequest struct {
    PathParams DrivePropertiesListPathParams 
    QueryParams DrivePropertiesListQueryParams 
    Security DrivePropertiesListSecurity 
    
}

type DrivePropertiesListResponse struct {
    ContentType string 
    PropertyList *shared.PropertyList 
    StatusCode int64 
    
}

