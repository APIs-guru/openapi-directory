package operations

import (
"openapi/pkg/models/shared")

type DriveChangesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    DriveID *string `queryParam:"style=form,explode=true,name=driveId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IncludeCorpusRemovals *bool `queryParam:"style=form,explode=true,name=includeCorpusRemovals"`
    IncludeDeleted *bool `queryParam:"style=form,explode=true,name=includeDeleted"`
    IncludeItemsFromAllDrives *bool `queryParam:"style=form,explode=true,name=includeItemsFromAllDrives"`
    IncludeLabels *string `queryParam:"style=form,explode=true,name=includeLabels"`
    IncludePermissionsForView *string `queryParam:"style=form,explode=true,name=includePermissionsForView"`
    IncludeSubscribed *bool `queryParam:"style=form,explode=true,name=includeSubscribed"`
    IncludeTeamDriveItems *bool `queryParam:"style=form,explode=true,name=includeTeamDriveItems"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Spaces *string `queryParam:"style=form,explode=true,name=spaces"`
    StartChangeID *string `queryParam:"style=form,explode=true,name=startChangeId"`
    SupportsAllDrives *bool `queryParam:"style=form,explode=true,name=supportsAllDrives"`
    SupportsTeamDrives *bool `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
    TeamDriveID *string `queryParam:"style=form,explode=true,name=teamDriveId"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveChangesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurityOption8 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveChangesListSecurity struct {
    Option1 *DriveChangesListSecurityOption1 `security:"option"`
    Option2 *DriveChangesListSecurityOption2 `security:"option"`
    Option3 *DriveChangesListSecurityOption3 `security:"option"`
    Option4 *DriveChangesListSecurityOption4 `security:"option"`
    Option5 *DriveChangesListSecurityOption5 `security:"option"`
    Option6 *DriveChangesListSecurityOption6 `security:"option"`
    Option7 *DriveChangesListSecurityOption7 `security:"option"`
    Option8 *DriveChangesListSecurityOption8 `security:"option"`
    
}

type DriveChangesListRequest struct {
    QueryParams DriveChangesListQueryParams 
    Security DriveChangesListSecurity 
    
}

type DriveChangesListResponse struct {
    ChangeList *shared.ChangeList 
    ContentType string 
    StatusCode int64 
    
}

