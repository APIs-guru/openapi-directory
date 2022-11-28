import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum BuildTriggerEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Repo = "REPO",
    Webhook = "WEBHOOK",
    Pubsub = "PUBSUB",
    Manual = "MANUAL"
}
export declare enum BuildTriggerIncludeBuildLogsEnum {
    IncludeBuildLogsUnspecified = "INCLUDE_BUILD_LOGS_UNSPECIFIED",
    IncludeBuildLogsWithStatus = "INCLUDE_BUILD_LOGS_WITH_STATUS"
}
/**
 * Configuration for an automated build in response to source repository changes.
**/
export declare class BuildTrigger extends SpeakeasyBase {
    approvalConfig?: ApprovalConfig;
    autodetect?: boolean;
    bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;
    build?: Build;
    createTime?: string;
    description?: string;
    disabled?: boolean;
    eventType?: BuildTriggerEventTypeEnum;
    filename?: string;
    filter?: string;
    gitFileSource?: GitFileSource;
    github?: GitHubEventsConfig;
    gitlabEnterpriseEventsConfig?: GitLabEventsConfig;
    id?: string;
    ignoredFiles?: string[];
    includeBuildLogs?: BuildTriggerIncludeBuildLogsEnum;
    includedFiles?: string[];
    name?: string;
    pubsubConfig?: PubsubConfig;
    repositoryEventConfig?: RepositoryEventConfig;
    resourceName?: string;
    serviceAccount?: string;
    sourceToBuild?: GitRepoSource;
    substitutions?: Map<string, string>;
    tags?: string[];
    triggerTemplate?: RepoSource;
    webhookConfig?: WebhookConfig;
}
/**
 * Configuration for an automated build in response to source repository changes.
**/
export declare class BuildTriggerInput extends SpeakeasyBase {
    approvalConfig?: ApprovalConfig;
    autodetect?: boolean;
    bitbucketServerTriggerConfig?: BitbucketServerTriggerConfigInput;
    build?: BuildInput;
    description?: string;
    disabled?: boolean;
    eventType?: BuildTriggerEventTypeEnum;
    filename?: string;
    filter?: string;
    gitFileSource?: GitFileSource;
    github?: GitHubEventsConfig;
    gitlabEnterpriseEventsConfig?: GitLabEventsConfigInput;
    ignoredFiles?: string[];
    includeBuildLogs?: BuildTriggerIncludeBuildLogsEnum;
    includedFiles?: string[];
    name?: string;
    pubsubConfig?: PubsubConfigInput;
    repositoryEventConfig?: RepositoryEventConfigInput;
    resourceName?: string;
    serviceAccount?: string;
    sourceToBuild?: GitRepoSource;
    substitutions?: Map<string, string>;
    tags?: string[];
    triggerTemplate?: RepoSource;
    webhookConfig?: WebhookConfig;
}
