import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalConfig } from "./approvalconfig";
import { BitbucketServerTriggerConfig } from "./bitbucketservertriggerconfig";
import { Build } from "./build";
import { GitFileSource } from "./gitfilesource";
import { GitHubEventsConfig } from "./githubeventsconfig";
import { GitLabEventsConfig } from "./gitlabeventsconfig";
import { PubsubConfig } from "./pubsubconfig";
import { RepositoryEventConfig } from "./repositoryeventconfig";
import { GitRepoSource } from "./gitreposource";
import { RepoSource } from "./reposource";
import { WebhookConfig } from "./webhookconfig";
import { BitbucketServerTriggerConfigInput } from "./bitbucketservertriggerconfig";
import { BuildInput } from "./build";
import { GitLabEventsConfigInput } from "./gitlabeventsconfig";
import { PubsubConfigInput } from "./pubsubconfig";
import { RepositoryEventConfigInput } from "./repositoryeventconfig";


export enum BuildTriggerEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Repo = "REPO",
    Webhook = "WEBHOOK",
    Pubsub = "PUBSUB",
    Manual = "MANUAL"
}

export enum BuildTriggerIncludeBuildLogsEnum {
    IncludeBuildLogsUnspecified = "INCLUDE_BUILD_LOGS_UNSPECIFIED",
    IncludeBuildLogsWithStatus = "INCLUDE_BUILD_LOGS_WITH_STATUS"
}


// BuildTrigger
/** 
 * Configuration for an automated build in response to source repository changes.
**/
export class BuildTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalConfig" })
  approvalConfig?: ApprovalConfig;

  @SpeakeasyMetadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bitbucketServerTriggerConfig" })
  bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: Build;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: BuildTriggerEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gitFileSource" })
  gitFileSource?: GitFileSource;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: GitHubEventsConfig;

  @SpeakeasyMetadata({ data: "json, name=gitlabEnterpriseEventsConfig" })
  gitlabEnterpriseEventsConfig?: GitLabEventsConfig;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoredFiles" })
  ignoredFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeBuildLogs" })
  includeBuildLogs?: BuildTriggerIncludeBuildLogsEnum;

  @SpeakeasyMetadata({ data: "json, name=includedFiles" })
  includedFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubConfig" })
  pubsubConfig?: PubsubConfig;

  @SpeakeasyMetadata({ data: "json, name=repositoryEventConfig" })
  repositoryEventConfig?: RepositoryEventConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceToBuild" })
  sourceToBuild?: GitRepoSource;

  @SpeakeasyMetadata({ data: "json, name=substitutions" })
  substitutions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=triggerTemplate" })
  triggerTemplate?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=webhookConfig" })
  webhookConfig?: WebhookConfig;
}


// BuildTriggerInput
/** 
 * Configuration for an automated build in response to source repository changes.
**/
export class BuildTriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalConfig" })
  approvalConfig?: ApprovalConfig;

  @SpeakeasyMetadata({ data: "json, name=autodetect" })
  autodetect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bitbucketServerTriggerConfig" })
  bitbucketServerTriggerConfig?: BitbucketServerTriggerConfigInput;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: BuildInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: BuildTriggerEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=gitFileSource" })
  gitFileSource?: GitFileSource;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: GitHubEventsConfig;

  @SpeakeasyMetadata({ data: "json, name=gitlabEnterpriseEventsConfig" })
  gitlabEnterpriseEventsConfig?: GitLabEventsConfigInput;

  @SpeakeasyMetadata({ data: "json, name=ignoredFiles" })
  ignoredFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeBuildLogs" })
  includeBuildLogs?: BuildTriggerIncludeBuildLogsEnum;

  @SpeakeasyMetadata({ data: "json, name=includedFiles" })
  includedFiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubConfig" })
  pubsubConfig?: PubsubConfigInput;

  @SpeakeasyMetadata({ data: "json, name=repositoryEventConfig" })
  repositoryEventConfig?: RepositoryEventConfigInput;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceToBuild" })
  sourceToBuild?: GitRepoSource;

  @SpeakeasyMetadata({ data: "json, name=substitutions" })
  substitutions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=triggerTemplate" })
  triggerTemplate?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=webhookConfig" })
  webhookConfig?: WebhookConfig;
}
