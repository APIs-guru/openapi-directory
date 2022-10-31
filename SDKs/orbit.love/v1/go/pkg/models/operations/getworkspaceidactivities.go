package operations

import (
"openapi/pkg/models/shared")

type GetWorkspaceIDActivitiesPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
    
}


type GetWorkspaceIDActivitiesActivityTypeEnum string

const (
    GetWorkspaceIDActivitiesActivityTypeEnumDiscordMessageSent GetWorkspaceIDActivitiesActivityTypeEnum = "discord:message:sent"
GetWorkspaceIDActivitiesActivityTypeEnumSlackThreadReplied GetWorkspaceIDActivitiesActivityTypeEnum = "slack:thread:replied"
GetWorkspaceIDActivitiesActivityTypeEnumDiscordMessageReplied GetWorkspaceIDActivitiesActivityTypeEnum = "discord:message:replied"
GetWorkspaceIDActivitiesActivityTypeEnumTweetSent GetWorkspaceIDActivitiesActivityTypeEnum = "tweet:sent"
GetWorkspaceIDActivitiesActivityTypeEnumTwitterFollowed GetWorkspaceIDActivitiesActivityTypeEnum = "twitter:followed"
GetWorkspaceIDActivitiesActivityTypeEnumDiscordServerJoined GetWorkspaceIDActivitiesActivityTypeEnum = "discord:server:joined"
GetWorkspaceIDActivitiesActivityTypeEnumDiscourseTopicCreated GetWorkspaceIDActivitiesActivityTypeEnum = "discourse:topic:created"
GetWorkspaceIDActivitiesActivityTypeEnumDiscoursePostCreated GetWorkspaceIDActivitiesActivityTypeEnum = "discourse:post:created"
GetWorkspaceIDActivitiesActivityTypeEnumSlackMessageSent GetWorkspaceIDActivitiesActivityTypeEnum = "slack:message:sent"
GetWorkspaceIDActivitiesActivityTypeEnumNoteCreated GetWorkspaceIDActivitiesActivityTypeEnum = "note:created"
GetWorkspaceIDActivitiesActivityTypeEnumPostCreated GetWorkspaceIDActivitiesActivityTypeEnum = "post:created"
GetWorkspaceIDActivitiesActivityTypeEnumIssuesOpened GetWorkspaceIDActivitiesActivityTypeEnum = "issues:opened"
GetWorkspaceIDActivitiesActivityTypeEnumIssueCommentCreated GetWorkspaceIDActivitiesActivityTypeEnum = "issue_comment:created"
GetWorkspaceIDActivitiesActivityTypeEnumPullRequestsOpened GetWorkspaceIDActivitiesActivityTypeEnum = "pull_requests:opened"
GetWorkspaceIDActivitiesActivityTypeEnumPullRequestsMerged GetWorkspaceIDActivitiesActivityTypeEnum = "pull_requests:merged"
GetWorkspaceIDActivitiesActivityTypeEnumCustomHappened GetWorkspaceIDActivitiesActivityTypeEnum = "custom:happened"
GetWorkspaceIDActivitiesActivityTypeEnumSlackChannelJoined GetWorkspaceIDActivitiesActivityTypeEnum = "slack:channel:joined"
GetWorkspaceIDActivitiesActivityTypeEnumStarCreated GetWorkspaceIDActivitiesActivityTypeEnum = "star:created"
)



type GetWorkspaceIDActivitiesAffiliationEnum string

const (
    GetWorkspaceIDActivitiesAffiliationEnumMember GetWorkspaceIDActivitiesAffiliationEnum = "member"
GetWorkspaceIDActivitiesAffiliationEnumTeammate GetWorkspaceIDActivitiesAffiliationEnum = "teammate"
)



type GetWorkspaceIDActivitiesDirectionEnum string

const (
    GetWorkspaceIDActivitiesDirectionEnumAsc GetWorkspaceIDActivitiesDirectionEnum = "ASC"
GetWorkspaceIDActivitiesDirectionEnumDesc GetWorkspaceIDActivitiesDirectionEnum = "DESC"
)



type GetWorkspaceIDActivitiesIdentityEnum string

const (
    GetWorkspaceIDActivitiesIdentityEnumGithub GetWorkspaceIDActivitiesIdentityEnum = "github"
GetWorkspaceIDActivitiesIdentityEnumTwitter GetWorkspaceIDActivitiesIdentityEnum = "twitter"
GetWorkspaceIDActivitiesIdentityEnumEmail GetWorkspaceIDActivitiesIdentityEnum = "email"
GetWorkspaceIDActivitiesIdentityEnumDiscourse GetWorkspaceIDActivitiesIdentityEnum = "discourse"
GetWorkspaceIDActivitiesIdentityEnumLinkedin GetWorkspaceIDActivitiesIdentityEnum = "linkedin"
GetWorkspaceIDActivitiesIdentityEnumDevto GetWorkspaceIDActivitiesIdentityEnum = "devto"
GetWorkspaceIDActivitiesIdentityEnumSlack GetWorkspaceIDActivitiesIdentityEnum = "slack"
GetWorkspaceIDActivitiesIdentityEnumDiscord GetWorkspaceIDActivitiesIdentityEnum = "discord"
)



type GetWorkspaceIDActivitiesItemsEnum string

const (
    GetWorkspaceIDActivitiesItemsEnumTen GetWorkspaceIDActivitiesItemsEnum = "10"
GetWorkspaceIDActivitiesItemsEnumFifty GetWorkspaceIDActivitiesItemsEnum = "50"
GetWorkspaceIDActivitiesItemsEnumOneHundred GetWorkspaceIDActivitiesItemsEnum = "100"
)



type GetWorkspaceIDActivitiesOrbitLevelEnum string

const (
    GetWorkspaceIDActivitiesOrbitLevelEnumOne GetWorkspaceIDActivitiesOrbitLevelEnum = "1"
GetWorkspaceIDActivitiesOrbitLevelEnumTwo GetWorkspaceIDActivitiesOrbitLevelEnum = "2"
GetWorkspaceIDActivitiesOrbitLevelEnumThree GetWorkspaceIDActivitiesOrbitLevelEnum = "3"
GetWorkspaceIDActivitiesOrbitLevelEnumFour GetWorkspaceIDActivitiesOrbitLevelEnum = "4"
GetWorkspaceIDActivitiesOrbitLevelEnumN GetWorkspaceIDActivitiesOrbitLevelEnum = "n"
)



type GetWorkspaceIDActivitiesSortEnum string

const (
    GetWorkspaceIDActivitiesSortEnumOccurredAt GetWorkspaceIDActivitiesSortEnum = "occurred_at"
GetWorkspaceIDActivitiesSortEnumMember GetWorkspaceIDActivitiesSortEnum = "member"
)


type GetWorkspaceIDActivitiesQueryParams struct {
    ActivityTags *string `queryParam:"style=form,explode=true,name=activity_tags"`
    ActivityType *GetWorkspaceIDActivitiesActivityTypeEnum `queryParam:"style=form,explode=true,name=activity_type"`
    Affiliation *GetWorkspaceIDActivitiesAffiliationEnum `queryParam:"style=form,explode=true,name=affiliation"`
    Company *string `queryParam:"style=form,explode=true,name=company"`
    Direction *GetWorkspaceIDActivitiesDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    EndDate *string `queryParam:"style=form,explode=true,name=end_date"`
    Identity *GetWorkspaceIDActivitiesIdentityEnum `queryParam:"style=form,explode=true,name=identity"`
    Items *GetWorkspaceIDActivitiesItemsEnum `queryParam:"style=form,explode=true,name=items"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    MemberTags *string `queryParam:"style=form,explode=true,name=member_tags"`
    OrbitLevel *GetWorkspaceIDActivitiesOrbitLevelEnum `queryParam:"style=form,explode=true,name=orbit_level"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    Sort *GetWorkspaceIDActivitiesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    StartDate *string `queryParam:"style=form,explode=true,name=start_date"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    Weight *string `queryParam:"style=form,explode=true,name=weight"`
    
}

type GetWorkspaceIDActivitiesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspaceIDActivitiesRequest struct {
    PathParams GetWorkspaceIDActivitiesPathParams 
    QueryParams GetWorkspaceIDActivitiesQueryParams 
    Security GetWorkspaceIDActivitiesSecurity 
    
}

type GetWorkspaceIDActivitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

