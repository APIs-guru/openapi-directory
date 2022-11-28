import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdMembersPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare enum GetWorkspaceIdMembersActivityTypeEnum {
    DiscordMessageSent = "discord:message:sent",
    SlackThreadReplied = "slack:thread:replied",
    DiscordMessageReplied = "discord:message:replied",
    TweetSent = "tweet:sent",
    TwitterFollowed = "twitter:followed",
    DiscordServerJoined = "discord:server:joined",
    DiscourseTopicCreated = "discourse:topic:created",
    DiscoursePostCreated = "discourse:post:created",
    SlackMessageSent = "slack:message:sent",
    NoteCreated = "note:created",
    PostCreated = "post:created",
    IssuesOpened = "issues:opened",
    IssueCommentCreated = "issue_comment:created",
    PullRequestsOpened = "pull_requests:opened",
    PullRequestsMerged = "pull_requests:merged",
    CustomHappened = "custom:happened",
    SlackChannelJoined = "slack:channel:joined",
    StarCreated = "star:created"
}
export declare enum GetWorkspaceIdMembersAffiliationEnum {
    Member = "member",
    Teammate = "teammate"
}
export declare enum GetWorkspaceIdMembersDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceIdMembersIdentityEnum {
    Github = "github",
    Twitter = "twitter",
    Email = "email",
    Discourse = "discourse",
    Linkedin = "linkedin",
    Devto = "devto",
    Slack = "slack",
    Discord = "discord"
}
export declare enum GetWorkspaceIdMembersItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceIdMembersOrbitLevelEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    N = "n"
}
export declare enum GetWorkspaceIdMembersSortEnum {
    ActivitiesCount = "activities_count",
    Company = "company",
    CreatedAt = "created_at",
    FirstActivity = "first_activity",
    GithubFollowers = "github_followers",
    Id = "id",
    LastActivity = "last_activity",
    Location = "location",
    Love = "love",
    Name = "name",
    Orbit = "orbit",
    Reach = "reach",
    Title = "title",
    TwitterFollowers = "twitter_followers",
    UpdatedAt = "updated_at"
}
export declare class GetWorkspaceIdMembersQueryParams extends SpeakeasyBase {
    activitiesCountMax?: string;
    activitiesCountMin?: string;
    activityTags?: string;
    activityType?: GetWorkspaceIdMembersActivityTypeEnum;
    affiliation?: GetWorkspaceIdMembersAffiliationEnum;
    company?: string;
    direction?: GetWorkspaceIdMembersDirectionEnum;
    endDate?: string;
    identity?: GetWorkspaceIdMembersIdentityEnum;
    items?: GetWorkspaceIdMembersItemsEnum;
    location?: string;
    memberTags?: string;
    orbitLevel?: GetWorkspaceIdMembersOrbitLevelEnum;
    page?: string;
    query?: string;
    sort?: GetWorkspaceIdMembersSortEnum;
    startDate?: string;
    type?: string;
    weight?: string;
}
export declare class GetWorkspaceIdMembersSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdMembersRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdMembersPathParams;
    queryParams: GetWorkspaceIdMembersQueryParams;
    security: GetWorkspaceIdMembersSecurity;
}
export declare class GetWorkspaceIdMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
