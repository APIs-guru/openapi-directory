import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceIdMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}

export enum GetWorkspaceIdMembersActivityTypeEnum {
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

export enum GetWorkspaceIdMembersAffiliationEnum {
    Member = "member",
    Teammate = "teammate"
}

export enum GetWorkspaceIdMembersDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}

export enum GetWorkspaceIdMembersIdentityEnum {
    Github = "github",
    Twitter = "twitter",
    Email = "email",
    Discourse = "discourse",
    Linkedin = "linkedin",
    Devto = "devto",
    Slack = "slack",
    Discord = "discord"
}

export enum GetWorkspaceIdMembersItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}

export enum GetWorkspaceIdMembersOrbitLevelEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    N = "n"
}

export enum GetWorkspaceIdMembersSortEnum {
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


export class GetWorkspaceIdMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activities_count_max" })
  activitiesCountMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activities_count_min" })
  activitiesCountMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_tags" })
  activityTags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_type" })
  activityType?: GetWorkspaceIdMembersActivityTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: GetWorkspaceIdMembersAffiliationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWorkspaceIdMembersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identity" })
  identity?: GetWorkspaceIdMembersIdentityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=items" })
  items?: GetWorkspaceIdMembersItemsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=member_tags" })
  memberTags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orbit_level" })
  orbitLevel?: GetWorkspaceIdMembersOrbitLevelEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWorkspaceIdMembersSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weight" })
  weight?: string;
}


export class GetWorkspaceIdMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceIdMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspaceIdMembersQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspaceIdMembersSecurity;
}


export class GetWorkspaceIdMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
