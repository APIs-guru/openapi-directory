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
import { GitLabConfig } from "./gitlabconfig";
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
import { GitLabConfigInput } from "./gitlabconfig";
// GitLabEventsConfig
/**
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
var GitLabEventsConfig = /** @class */ (function (_super) {
    __extends(GitLabEventsConfig, _super);
    function GitLabEventsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabConfig" }),
        __metadata("design:type", GitLabConfig)
    ], GitLabEventsConfig.prototype, "gitlabConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabConfigResource" }),
        __metadata("design:type", String)
    ], GitLabEventsConfig.prototype, "gitlabConfigResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectNamespace" }),
        __metadata("design:type", String)
    ], GitLabEventsConfig.prototype, "projectNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequest" }),
        __metadata("design:type", PullRequestFilter)
    ], GitLabEventsConfig.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", PushFilter)
    ], GitLabEventsConfig.prototype, "push", void 0);
    return GitLabEventsConfig;
}(SpeakeasyBase));
export { GitLabEventsConfig };
// GitLabEventsConfigInput
/**
 * GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received.
**/
var GitLabEventsConfigInput = /** @class */ (function (_super) {
    __extends(GitLabEventsConfigInput, _super);
    function GitLabEventsConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabConfig" }),
        __metadata("design:type", GitLabConfigInput)
    ], GitLabEventsConfigInput.prototype, "gitlabConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitlabConfigResource" }),
        __metadata("design:type", String)
    ], GitLabEventsConfigInput.prototype, "gitlabConfigResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectNamespace" }),
        __metadata("design:type", String)
    ], GitLabEventsConfigInput.prototype, "projectNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequest" }),
        __metadata("design:type", PullRequestFilter)
    ], GitLabEventsConfigInput.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", PushFilter)
    ], GitLabEventsConfigInput.prototype, "push", void 0);
    return GitLabEventsConfigInput;
}(SpeakeasyBase));
export { GitLabEventsConfigInput };
