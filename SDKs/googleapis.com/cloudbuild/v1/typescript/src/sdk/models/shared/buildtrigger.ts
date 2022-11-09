import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalConfig } from "./approvalconfig";
import { BitbucketServerTriggerConfig } from "./bitbucketservertriggerconfig";
import { Build } from "./build";
import { GitFileSource } from "./gitfilesource";
import { GitHubEventsConfig } from "./githubeventsconfig";
import { GitLabEventsConfig } from "./gitlabeventsconfig";
import { PubsubConfig } from "./pubsubconfig";
import { GitRepoSource } from "./gitreposource";
import { RepoSource } from "./reposource";
import { WebhookConfig } from "./webhookconfig";

export enum BuildTriggerEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED"
,    Repo = "REPO"
,    Webhook = "WEBHOOK"
,    Pubsub = "PUBSUB"
,    Manual = "MANUAL"
}

export enum BuildTriggerIncludeBuildLogsEnum {
    IncludeBuildLogsUnspecified = "INCLUDE_BUILD_LOGS_UNSPECIFIED"
,    IncludeBuildLogsWithStatus = "INCLUDE_BUILD_LOGS_WITH_STATUS"
}


// BuildTrigger
/** 
 * Configuration for an automated build in response to source repository changes.
**/
export class BuildTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalConfig" })
  approvalConfig?: ApprovalConfig;

  @Metadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @Metadata({ data: "json, name=bitbucketServerTriggerConfig" })
  bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;

  @Metadata({ data: "json, name=build" })
  build?: Build;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=eventType" })
  eventType?: BuildTriggerEventTypeEnum;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=gitFileSource" })
  gitFileSource?: GitFileSource;

  @Metadata({ data: "json, name=github" })
  github?: GitHubEventsConfig;

  @Metadata({ data: "json, name=gitlabEnterpriseEventsConfig" })
  gitlabEnterpriseEventsConfig?: GitLabEventsConfig;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ignoredFiles" })
  ignoredFiles?: string[];

  @Metadata({ data: "json, name=includeBuildLogs" })
  includeBuildLogs?: BuildTriggerIncludeBuildLogsEnum;

  @Metadata({ data: "json, name=includedFiles" })
  includedFiles?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pubsubConfig" })
  pubsubConfig?: PubsubConfig;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=sourceToBuild" })
  sourceToBuild?: GitRepoSource;

  @Metadata({ data: "json, name=substitutions" })
  substitutions?: Map<string, string>;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=triggerTemplate" })
  triggerTemplate?: RepoSource;

  @Metadata({ data: "json, name=webhookConfig" })
  webhookConfig?: WebhookConfig;
}
