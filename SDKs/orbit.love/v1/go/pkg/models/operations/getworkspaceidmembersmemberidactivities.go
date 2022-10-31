package operations

import (
"openapi/pkg/models/shared")

type GetWorkspaceIDMembersMemberIDActivitiesPathParams struct {
    MemberID string `pathParam:"style=simple,explode=false,name=member_id"`
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}


type GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum string

const (
    GetWorkspaceIDMembersMemberIDActivitiesDirectionEnumAsc GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum = "ASC"
GetWorkspaceIDMembersMemberIDActivitiesDirectionEnumDesc GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum = "DESC"
)



type GetWorkspaceIDMembersMemberIDActivitiesItemsEnum string

const (
    GetWorkspaceIDMembersMemberIDActivitiesItemsEnumTen GetWorkspaceIDMembersMemberIDActivitiesItemsEnum = "10"
GetWorkspaceIDMembersMemberIDActivitiesItemsEnumFifty GetWorkspaceIDMembersMemberIDActivitiesItemsEnum = "50"
GetWorkspaceIDMembersMemberIDActivitiesItemsEnumOneHundred GetWorkspaceIDMembersMemberIDActivitiesItemsEnum = "100"
)



type GetWorkspaceIDMembersMemberIDActivitiesSortEnum string

const (
    GetWorkspaceIDMembersMemberIDActivitiesSortEnumOccurredAt GetWorkspaceIDMembersMemberIDActivitiesSortEnum = "occurred_at"
GetWorkspaceIDMembersMemberIDActivitiesSortEnumMember GetWorkspaceIDMembersMemberIDActivitiesSortEnum = "member"
)


type GetWorkspaceIDMembersMemberIDActivitiesQueryParams struct {
    ActivityType *string `queryParam:"style=form,explode=true,name=activity_type"`
    Direction *GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Items *GetWorkspaceIDMembersMemberIDActivitiesItemsEnum `queryParam:"style=form,explode=true,name=items"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    Sort *GetWorkspaceIDMembersMemberIDActivitiesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetWorkspaceIDMembersMemberIDActivitiesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspaceIDMembersMemberIDActivitiesRequest struct {
    PathParams GetWorkspaceIDMembersMemberIDActivitiesPathParams 
    QueryParams GetWorkspaceIDMembersMemberIDActivitiesQueryParams 
    Security GetWorkspaceIDMembersMemberIDActivitiesSecurity 
    
}

type GetWorkspaceIDMembersMemberIDActivitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

