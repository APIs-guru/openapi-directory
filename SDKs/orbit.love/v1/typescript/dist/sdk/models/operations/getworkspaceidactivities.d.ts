import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdActivitiesPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare enum GetWorkspaceIdActivitiesActivityTypeEnum {
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
export declare enum GetWorkspaceIdActivitiesAffiliationEnum {
    Member = "member",
    Teammate = "teammate"
}
export declare enum GetWorkspaceIdActivitiesDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceIdActivitiesIdentityEnum {
    Github = "github",
    Twitter = "twitter",
    Email = "email",
    Discourse = "discourse",
    Linkedin = "linkedin",
    Devto = "devto",
    Slack = "slack",
    Discord = "discord"
}
export declare enum GetWorkspaceIdActivitiesItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceIdActivitiesOrbitLevelEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    N = "n"
}
export declare enum GetWorkspaceIdActivitiesSortEnum {
    OccurredAt = "occurred_at",
    Member = "member"
}
export declare class GetWorkspaceIdActivitiesQueryParams extends SpeakeasyBase {
    activityTags?: string;
    activityType?: GetWorkspaceIdActivitiesActivityTypeEnum;
    affiliation?: GetWorkspaceIdActivitiesAffiliationEnum;
    company?: string;
    direction?: GetWorkspaceIdActivitiesDirectionEnum;
    endDate?: string;
    identity?: GetWorkspaceIdActivitiesIdentityEnum;
    items?: GetWorkspaceIdActivitiesItemsEnum;
    location?: string;
    memberTags?: string;
    orbitLevel?: GetWorkspaceIdActivitiesOrbitLevelEnum;
    page?: string;
    sort?: GetWorkspaceIdActivitiesSortEnum;
    startDate?: string;
    type?: string;
    weight?: string;
}
export declare class GetWorkspaceIdActivitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdActivitiesRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdActivitiesPathParams;
    queryParams: GetWorkspaceIdActivitiesQueryParams;
    security: GetWorkspaceIdActivitiesSecurity;
}
export declare class GetWorkspaceIdActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
