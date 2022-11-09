import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}

export enum GetWorkspaceIdMembersActivityTypeEnum {
    DiscordMessageSent = "discord:message:sent"
,    SlackThreadReplied = "slack:thread:replied"
,    DiscordMessageReplied = "discord:message:replied"
,    TweetSent = "tweet:sent"
,    TwitterFollowed = "twitter:followed"
,    DiscordServerJoined = "discord:server:joined"
,    DiscourseTopicCreated = "discourse:topic:created"
,    DiscoursePostCreated = "discourse:post:created"
,    SlackMessageSent = "slack:message:sent"
,    NoteCreated = "note:created"
,    PostCreated = "post:created"
,    IssuesOpened = "issues:opened"
,    IssueCommentCreated = "issue_comment:created"
,    PullRequestsOpened = "pull_requests:opened"
,    PullRequestsMerged = "pull_requests:merged"
,    CustomHappened = "custom:happened"
,    SlackChannelJoined = "slack:channel:joined"
,    StarCreated = "star:created"
}

export enum GetWorkspaceIdMembersAffiliationEnum {
    Member = "member"
,    Teammate = "teammate"
}

export enum GetWorkspaceIdMembersDirectionEnum {
    Asc = "ASC"
,    Desc = "DESC"
}

export enum GetWorkspaceIdMembersIdentityEnum {
    Github = "github"
,    Twitter = "twitter"
,    Email = "email"
,    Discourse = "discourse"
,    Linkedin = "linkedin"
,    Devto = "devto"
,    Slack = "slack"
,    Discord = "discord"
}

export enum GetWorkspaceIdMembersItemsEnum {
    Ten = "10"
,    Fifty = "50"
,    OneHundred = "100"
}

export enum GetWorkspaceIdMembersOrbitLevelEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    N = "n"
}

export enum GetWorkspaceIdMembersSortEnum {
    ActivitiesCount = "activities_count"
,    Company = "company"
,    CreatedAt = "created_at"
,    FirstActivity = "first_activity"
,    GithubFollowers = "github_followers"
,    Id = "id"
,    LastActivity = "last_activity"
,    Location = "location"
,    Love = "love"
,    Name = "name"
,    Orbit = "orbit"
,    Reach = "reach"
,    Title = "title"
,    TwitterFollowers = "twitter_followers"
,    UpdatedAt = "updated_at"
}


export class GetWorkspaceIdMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activities_count_max" })
  activitiesCountMax?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=activities_count_min" })
  activitiesCountMin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=activity_tags" })
  activityTags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=activity_type" })
  activityType?: GetWorkspaceIdMembersActivityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: GetWorkspaceIdMembersAffiliationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWorkspaceIdMembersDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=identity" })
  identity?: GetWorkspaceIdMembersIdentityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=items" })
  items?: GetWorkspaceIdMembersItemsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=member_tags" })
  memberTags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orbit_level" })
  orbitLevel?: GetWorkspaceIdMembersOrbitLevelEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWorkspaceIdMembersSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weight" })
  weight?: string;
}


export class GetWorkspaceIdMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdMembersPathParams;

  @Metadata()
  queryParams: GetWorkspaceIdMembersQueryParams;

  @Metadata()
  security: GetWorkspaceIdMembersSecurity;
}


export class GetWorkspaceIdMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
