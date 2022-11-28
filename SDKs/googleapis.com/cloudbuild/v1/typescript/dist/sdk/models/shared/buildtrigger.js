var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var BuildTriggerEventTypeEnum;
(function (BuildTriggerEventTypeEnum) {
    BuildTriggerEventTypeEnum["EventTypeUnspecified"] = "EVENT_TYPE_UNSPECIFIED";
    BuildTriggerEventTypeEnum["Repo"] = "REPO";
    BuildTriggerEventTypeEnum["Webhook"] = "WEBHOOK";
    BuildTriggerEventTypeEnum["Pubsub"] = "PUBSUB";
    BuildTriggerEventTypeEnum["Manual"] = "MANUAL";
})(BuildTriggerEventTypeEnum || (BuildTriggerEventTypeEnum = {}));
export var BuildTriggerIncludeBuildLogsEnum;
(function (BuildTriggerIncludeBuildLogsEnum) {
    BuildTriggerIncludeBuildLogsEnum["IncludeBuildLogsUnspecified"] = "INCLUDE_BUILD_LOGS_UNSPECIFIED";
    BuildTriggerIncludeBuildLogsEnum["IncludeBuildLogsWithStatus"] = "INCLUDE_BUILD_LOGS_WITH_STATUS";
})(BuildTriggerIncludeBuildLogsEnum || (BuildTriggerIncludeBuildLogsEnum = {}));
// BuildTrigger
/**
 * Configuration for an automated build in response to source repository changes.
**/
var BuildTrigger = /** @class */ (function (_super) {
    __extends(BuildTrigger, _super);
    function BuildTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalConfig" }),
        __metadata("design:type", ApprovalConfig)
    ], BuildTrigger.prototype, "approvalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodetect" }),
        __metadata("design:type", Boolean)
    ], BuildTrigger.prototype, "autodetect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitbucketServerTriggerConfig" }),
        __metadata("design:type", BitbucketServerTriggerConfig)
    ], BuildTrigger.prototype, "bitbucketServerTriggerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", Build)
    ], BuildTrigger.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], BuildTrigger.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitFileSource" }),
        __metadata("design:type", GitFileSource)
    ], BuildTrigger.prototype, "gitFileSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github" }),
        __metadata("design:type", GitHubEventsConfig)
    ], BuildTrigger.prototype, "github", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabEnterpriseEventsConfig" }),
        __metadata("design:type", GitLabEventsConfig)
    ], BuildTrigger.prototype, "gitlabEnterpriseEventsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoredFiles" }),
        __metadata("design:type", Array)
    ], BuildTrigger.prototype, "ignoredFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeBuildLogs" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "includeBuildLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedFiles" }),
        __metadata("design:type", Array)
    ], BuildTrigger.prototype, "includedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubConfig" }),
        __metadata("design:type", PubsubConfig)
    ], BuildTrigger.prototype, "pubsubConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryEventConfig" }),
        __metadata("design:type", RepositoryEventConfig)
    ], BuildTrigger.prototype, "repositoryEventConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], BuildTrigger.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceToBuild" }),
        __metadata("design:type", GitRepoSource)
    ], BuildTrigger.prototype, "sourceToBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=substitutions" }),
        __metadata("design:type", Map)
    ], BuildTrigger.prototype, "substitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], BuildTrigger.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerTemplate" }),
        __metadata("design:type", RepoSource)
    ], BuildTrigger.prototype, "triggerTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookConfig" }),
        __metadata("design:type", WebhookConfig)
    ], BuildTrigger.prototype, "webhookConfig", void 0);
    return BuildTrigger;
}(SpeakeasyBase));
export { BuildTrigger };
// BuildTriggerInput
/**
 * Configuration for an automated build in response to source repository changes.
**/
var BuildTriggerInput = /** @class */ (function (_super) {
    __extends(BuildTriggerInput, _super);
    function BuildTriggerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalConfig" }),
        __metadata("design:type", ApprovalConfig)
    ], BuildTriggerInput.prototype, "approvalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autodetect" }),
        __metadata("design:type", Boolean)
    ], BuildTriggerInput.prototype, "autodetect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitbucketServerTriggerConfig" }),
        __metadata("design:type", BitbucketServerTriggerConfigInput)
    ], BuildTriggerInput.prototype, "bitbucketServerTriggerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", BuildInput)
    ], BuildTriggerInput.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], BuildTriggerInput.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitFileSource" }),
        __metadata("design:type", GitFileSource)
    ], BuildTriggerInput.prototype, "gitFileSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github" }),
        __metadata("design:type", GitHubEventsConfig)
    ], BuildTriggerInput.prototype, "github", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabEnterpriseEventsConfig" }),
        __metadata("design:type", GitLabEventsConfigInput)
    ], BuildTriggerInput.prototype, "gitlabEnterpriseEventsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoredFiles" }),
        __metadata("design:type", Array)
    ], BuildTriggerInput.prototype, "ignoredFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeBuildLogs" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "includeBuildLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedFiles" }),
        __metadata("design:type", Array)
    ], BuildTriggerInput.prototype, "includedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubConfig" }),
        __metadata("design:type", PubsubConfigInput)
    ], BuildTriggerInput.prototype, "pubsubConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryEventConfig" }),
        __metadata("design:type", RepositoryEventConfigInput)
    ], BuildTriggerInput.prototype, "repositoryEventConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], BuildTriggerInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceToBuild" }),
        __metadata("design:type", GitRepoSource)
    ], BuildTriggerInput.prototype, "sourceToBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=substitutions" }),
        __metadata("design:type", Map)
    ], BuildTriggerInput.prototype, "substitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], BuildTriggerInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerTemplate" }),
        __metadata("design:type", RepoSource)
    ], BuildTriggerInput.prototype, "triggerTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookConfig" }),
        __metadata("design:type", WebhookConfig)
    ], BuildTriggerInput.prototype, "webhookConfig", void 0);
    return BuildTriggerInput;
}(SpeakeasyBase));
export { BuildTriggerInput };
