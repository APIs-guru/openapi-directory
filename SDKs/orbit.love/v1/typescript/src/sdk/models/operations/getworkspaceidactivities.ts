import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdActivitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}

export enum GetWorkspaceIdActivitiesActivityTypeEnum {
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

export enum GetWorkspaceIdActivitiesAffiliationEnum {
    Member = "member"
,    Teammate = "teammate"
}

export enum GetWorkspaceIdActivitiesDirectionEnum {
    Asc = "ASC"
,    Desc = "DESC"
}

export enum GetWorkspaceIdActivitiesIdentityEnum {
    Github = "github"
,    Twitter = "twitter"
,    Email = "email"
,    Discourse = "discourse"
,    Linkedin = "linkedin"
,    Devto = "devto"
,    Slack = "slack"
,    Discord = "discord"
}

export enum GetWorkspaceIdActivitiesItemsEnum {
    Ten = "10"
,    Fifty = "50"
,    OneHundred = "100"
}

export enum GetWorkspaceIdActivitiesOrbitLevelEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
,    Four = "4"
,    N = "n"
}

export enum GetWorkspaceIdActivitiesSortEnum {
    OccurredAt = "occurred_at"
,    Member = "member"
}


export class GetWorkspaceIdActivitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activity_tags" })
  activityTags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=activity_type" })
  activityType?: GetWorkspaceIdActivitiesActivityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: GetWorkspaceIdActivitiesAffiliationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWorkspaceIdActivitiesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=identity" })
  identity?: GetWorkspaceIdActivitiesIdentityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=items" })
  items?: GetWorkspaceIdActivitiesItemsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=member_tags" })
  memberTags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orbit_level" })
  orbitLevel?: GetWorkspaceIdActivitiesOrbitLevelEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWorkspaceIdActivitiesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weight" })
  weight?: string;
}


export class GetWorkspaceIdActivitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdActivitiesPathParams;

  @Metadata()
  queryParams: GetWorkspaceIdActivitiesQueryParams;

  @Metadata()
  security: GetWorkspaceIdActivitiesSecurity;
}


export class GetWorkspaceIdActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
