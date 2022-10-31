package operations

import (
"openapi/pkg/models/shared")

type DriveRevisionsPatchPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    RevisionID string `pathParam:"style=simple,explode=false,name=revisionId"`
    
}

type DriveRevisionsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRevisionsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsPatchSecurity struct {
    Option1 *DriveRevisionsPatchSecurityOption1 `security:"option"`
    Option2 *DriveRevisionsPatchSecurityOption2 `security:"option"`
    Option3 *DriveRevisionsPatchSecurityOption3 `security:"option"`
    
}

type DriveRevisionsPatchRequest struct {
    PathParams DriveRevisionsPatchPathParams 
    QueryParams DriveRevisionsPatchQueryParams 
    Request *shared.Revision `request:"mediaType=application/json"`
    Security DriveRevisionsPatchSecurity 
    
}

type DriveRevisionsPatchResponse struct {
    ContentType string 
    Revision *shared.Revision 
    StatusCode int64 
    
}

