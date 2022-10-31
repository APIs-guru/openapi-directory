package operations

import (
"openapi/pkg/models/shared")

type DriveRevisionsGetPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    RevisionID string `pathParam:"style=simple,explode=false,name=revisionId"`
    
}

type DriveRevisionsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveRevisionsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveRevisionsGetSecurity struct {
    Option1 *DriveRevisionsGetSecurityOption1 `security:"option"`
    Option2 *DriveRevisionsGetSecurityOption2 `security:"option"`
    Option3 *DriveRevisionsGetSecurityOption3 `security:"option"`
    Option4 *DriveRevisionsGetSecurityOption4 `security:"option"`
    Option5 *DriveRevisionsGetSecurityOption5 `security:"option"`
    Option6 *DriveRevisionsGetSecurityOption6 `security:"option"`
    Option7 *DriveRevisionsGetSecurityOption7 `security:"option"`
    
}

type DriveRevisionsGetRequest struct {
    PathParams DriveRevisionsGetPathParams 
    QueryParams DriveRevisionsGetQueryParams 
    Security DriveRevisionsGetSecurity 
    
}

type DriveRevisionsGetResponse struct {
    ContentType string 
    Revision *shared.Revision 
    StatusCode int64 
    
}

