package operations

import (
"openapi/pkg/models/shared")

type PlusCommentsListPathParams struct {
    ActivityID string `pathParam:"style=simple,explode=false,name=activityId"`
    
}


type PlusCommentsListSortOrderEnum string

const (
    PlusCommentsListSortOrderEnumAscending PlusCommentsListSortOrderEnum = "ascending"
PlusCommentsListSortOrderEnumDescending PlusCommentsListSortOrderEnum = "descending"
)


type PlusCommentsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SortOrder *PlusCommentsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type PlusCommentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusCommentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusCommentsListSecurity struct {
    Option1 *PlusCommentsListSecurityOption1 `security:"option"`
    Option2 *PlusCommentsListSecurityOption2 `security:"option"`
    
}

type PlusCommentsListRequest struct {
    PathParams PlusCommentsListPathParams 
    QueryParams PlusCommentsListQueryParams 
    Security PlusCommentsListSecurity 
    
}

type PlusCommentsListResponse struct {
    CommentFeed *shared.CommentFeed 
    ContentType string 
    StatusCode int64 
    
}

