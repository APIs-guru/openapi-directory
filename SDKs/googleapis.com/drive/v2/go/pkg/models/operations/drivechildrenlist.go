package operations

import (
"openapi/pkg/models/shared")

type DriveChildrenListPathParams struct {
    FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
    
}

type DriveChildrenListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveChildrenListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChildrenListSecurity struct {
    Option1 *DriveChildrenListSecurityOption1 `security:"option"`
    Option2 *DriveChildrenListSecurityOption2 `security:"option"`
    Option3 *DriveChildrenListSecurityOption3 `security:"option"`
    Option4 *DriveChildrenListSecurityOption4 `security:"option"`
    Option5 *DriveChildrenListSecurityOption5 `security:"option"`
    Option6 *DriveChildrenListSecurityOption6 `security:"option"`
    Option7 *DriveChildrenListSecurityOption7 `security:"option"`
    
}

type DriveChildrenListRequest struct {
    PathParams DriveChildrenListPathParams 
    QueryParams DriveChildrenListQueryParams 
    Security DriveChildrenListSecurity 
    
}

type DriveChildrenListResponse struct {
    ChildList *shared.ChildList 
    ContentType string 
    StatusCode int64 
    
}

