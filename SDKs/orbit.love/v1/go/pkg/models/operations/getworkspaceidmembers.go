package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceIDMembersPathParams struct {
	WorkspaceID string `pathParam:"style=simple,explode=false,name=workspace_id"`
}

type GetWorkspaceIDMembersActivityTypeEnum string

const (
	GetWorkspaceIDMembersActivityTypeEnumDiscordMessageSent    GetWorkspaceIDMembersActivityTypeEnum = "discord:message:sent"
	GetWorkspaceIDMembersActivityTypeEnumSlackThreadReplied    GetWorkspaceIDMembersActivityTypeEnum = "slack:thread:replied"
	GetWorkspaceIDMembersActivityTypeEnumDiscordMessageReplied GetWorkspaceIDMembersActivityTypeEnum = "discord:message:replied"
	GetWorkspaceIDMembersActivityTypeEnumTweetSent             GetWorkspaceIDMembersActivityTypeEnum = "tweet:sent"
	GetWorkspaceIDMembersActivityTypeEnumTwitterFollowed       GetWorkspaceIDMembersActivityTypeEnum = "twitter:followed"
	GetWorkspaceIDMembersActivityTypeEnumDiscordServerJoined   GetWorkspaceIDMembersActivityTypeEnum = "discord:server:joined"
	GetWorkspaceIDMembersActivityTypeEnumDiscourseTopicCreated GetWorkspaceIDMembersActivityTypeEnum = "discourse:topic:created"
	GetWorkspaceIDMembersActivityTypeEnumDiscoursePostCreated  GetWorkspaceIDMembersActivityTypeEnum = "discourse:post:created"
	GetWorkspaceIDMembersActivityTypeEnumSlackMessageSent      GetWorkspaceIDMembersActivityTypeEnum = "slack:message:sent"
	GetWorkspaceIDMembersActivityTypeEnumNoteCreated           GetWorkspaceIDMembersActivityTypeEnum = "note:created"
	GetWorkspaceIDMembersActivityTypeEnumPostCreated           GetWorkspaceIDMembersActivityTypeEnum = "post:created"
	GetWorkspaceIDMembersActivityTypeEnumIssuesOpened          GetWorkspaceIDMembersActivityTypeEnum = "issues:opened"
	GetWorkspaceIDMembersActivityTypeEnumIssueCommentCreated   GetWorkspaceIDMembersActivityTypeEnum = "issue_comment:created"
	GetWorkspaceIDMembersActivityTypeEnumPullRequestsOpened    GetWorkspaceIDMembersActivityTypeEnum = "pull_requests:opened"
	GetWorkspaceIDMembersActivityTypeEnumPullRequestsMerged    GetWorkspaceIDMembersActivityTypeEnum = "pull_requests:merged"
	GetWorkspaceIDMembersActivityTypeEnumCustomHappened        GetWorkspaceIDMembersActivityTypeEnum = "custom:happened"
	GetWorkspaceIDMembersActivityTypeEnumSlackChannelJoined    GetWorkspaceIDMembersActivityTypeEnum = "slack:channel:joined"
	GetWorkspaceIDMembersActivityTypeEnumStarCreated           GetWorkspaceIDMembersActivityTypeEnum = "star:created"
)

type GetWorkspaceIDMembersAffiliationEnum string

const (
	GetWorkspaceIDMembersAffiliationEnumMember   GetWorkspaceIDMembersAffiliationEnum = "member"
	GetWorkspaceIDMembersAffiliationEnumTeammate GetWorkspaceIDMembersAffiliationEnum = "teammate"
)

type GetWorkspaceIDMembersDirectionEnum string

const (
	GetWorkspaceIDMembersDirectionEnumAsc  GetWorkspaceIDMembersDirectionEnum = "ASC"
	GetWorkspaceIDMembersDirectionEnumDesc GetWorkspaceIDMembersDirectionEnum = "DESC"
)

type GetWorkspaceIDMembersIdentityEnum string

const (
	GetWorkspaceIDMembersIdentityEnumGithub    GetWorkspaceIDMembersIdentityEnum = "github"
	GetWorkspaceIDMembersIdentityEnumTwitter   GetWorkspaceIDMembersIdentityEnum = "twitter"
	GetWorkspaceIDMembersIdentityEnumEmail     GetWorkspaceIDMembersIdentityEnum = "email"
	GetWorkspaceIDMembersIdentityEnumDiscourse GetWorkspaceIDMembersIdentityEnum = "discourse"
	GetWorkspaceIDMembersIdentityEnumLinkedin  GetWorkspaceIDMembersIdentityEnum = "linkedin"
	GetWorkspaceIDMembersIdentityEnumDevto     GetWorkspaceIDMembersIdentityEnum = "devto"
	GetWorkspaceIDMembersIdentityEnumSlack     GetWorkspaceIDMembersIdentityEnum = "slack"
	GetWorkspaceIDMembersIdentityEnumDiscord   GetWorkspaceIDMembersIdentityEnum = "discord"
)

type GetWorkspaceIDMembersItemsEnum string

const (
	GetWorkspaceIDMembersItemsEnumTen        GetWorkspaceIDMembersItemsEnum = "10"
	GetWorkspaceIDMembersItemsEnumFifty      GetWorkspaceIDMembersItemsEnum = "50"
	GetWorkspaceIDMembersItemsEnumOneHundred GetWorkspaceIDMembersItemsEnum = "100"
)

type GetWorkspaceIDMembersOrbitLevelEnum string

const (
	GetWorkspaceIDMembersOrbitLevelEnumOne   GetWorkspaceIDMembersOrbitLevelEnum = "1"
	GetWorkspaceIDMembersOrbitLevelEnumTwo   GetWorkspaceIDMembersOrbitLevelEnum = "2"
	GetWorkspaceIDMembersOrbitLevelEnumThree GetWorkspaceIDMembersOrbitLevelEnum = "3"
	GetWorkspaceIDMembersOrbitLevelEnumFour  GetWorkspaceIDMembersOrbitLevelEnum = "4"
	GetWorkspaceIDMembersOrbitLevelEnumN     GetWorkspaceIDMembersOrbitLevelEnum = "n"
)

type GetWorkspaceIDMembersSortEnum string

const (
	GetWorkspaceIDMembersSortEnumActivitiesCount  GetWorkspaceIDMembersSortEnum = "activities_count"
	GetWorkspaceIDMembersSortEnumCompany          GetWorkspaceIDMembersSortEnum = "company"
	GetWorkspaceIDMembersSortEnumCreatedAt        GetWorkspaceIDMembersSortEnum = "created_at"
	GetWorkspaceIDMembersSortEnumFirstActivity    GetWorkspaceIDMembersSortEnum = "first_activity"
	GetWorkspaceIDMembersSortEnumGithubFollowers  GetWorkspaceIDMembersSortEnum = "github_followers"
	GetWorkspaceIDMembersSortEnumID               GetWorkspaceIDMembersSortEnum = "id"
	GetWorkspaceIDMembersSortEnumLastActivity     GetWorkspaceIDMembersSortEnum = "last_activity"
	GetWorkspaceIDMembersSortEnumLocation         GetWorkspaceIDMembersSortEnum = "location"
	GetWorkspaceIDMembersSortEnumLove             GetWorkspaceIDMembersSortEnum = "love"
	GetWorkspaceIDMembersSortEnumName             GetWorkspaceIDMembersSortEnum = "name"
	GetWorkspaceIDMembersSortEnumOrbit            GetWorkspaceIDMembersSortEnum = "orbit"
	GetWorkspaceIDMembersSortEnumReach            GetWorkspaceIDMembersSortEnum = "reach"
	GetWorkspaceIDMembersSortEnumTitle            GetWorkspaceIDMembersSortEnum = "title"
	GetWorkspaceIDMembersSortEnumTwitterFollowers GetWorkspaceIDMembersSortEnum = "twitter_followers"
	GetWorkspaceIDMembersSortEnumUpdatedAt        GetWorkspaceIDMembersSortEnum = "updated_at"
)

type GetWorkspaceIDMembersQueryParams struct {
	ActivitiesCountMax *string                                `queryParam:"style=form,explode=true,name=activities_count_max"`
	ActivitiesCountMin *string                                `queryParam:"style=form,explode=true,name=activities_count_min"`
	ActivityTags       *string                                `queryParam:"style=form,explode=true,name=activity_tags"`
	ActivityType       *GetWorkspaceIDMembersActivityTypeEnum `queryParam:"style=form,explode=true,name=activity_type"`
	Affiliation        *GetWorkspaceIDMembersAffiliationEnum  `queryParam:"style=form,explode=true,name=affiliation"`
	Company            *string                                `queryParam:"style=form,explode=true,name=company"`
	Direction          *GetWorkspaceIDMembersDirectionEnum    `queryParam:"style=form,explode=true,name=direction"`
	EndDate            *string                                `queryParam:"style=form,explode=true,name=end_date"`
	Identity           *GetWorkspaceIDMembersIdentityEnum     `queryParam:"style=form,explode=true,name=identity"`
	Items              *GetWorkspaceIDMembersItemsEnum        `queryParam:"style=form,explode=true,name=items"`
	Location           *string                                `queryParam:"style=form,explode=true,name=location"`
	MemberTags         *string                                `queryParam:"style=form,explode=true,name=member_tags"`
	OrbitLevel         *GetWorkspaceIDMembersOrbitLevelEnum   `queryParam:"style=form,explode=true,name=orbit_level"`
	Page               *string                                `queryParam:"style=form,explode=true,name=page"`
	Query              *string                                `queryParam:"style=form,explode=true,name=query"`
	Sort               *GetWorkspaceIDMembersSortEnum         `queryParam:"style=form,explode=true,name=sort"`
	StartDate          *string                                `queryParam:"style=form,explode=true,name=start_date"`
	Type               *string                                `queryParam:"style=form,explode=true,name=type"`
	Weight             *string                                `queryParam:"style=form,explode=true,name=weight"`
}

type GetWorkspaceIDMembersSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
}

type GetWorkspaceIDMembersRequest struct {
	PathParams  GetWorkspaceIDMembersPathParams
	QueryParams GetWorkspaceIDMembersQueryParams
	Security    GetWorkspaceIDMembersSecurity
}

type GetWorkspaceIDMembersResponse struct {
	ContentType string
	StatusCode  int64
}
