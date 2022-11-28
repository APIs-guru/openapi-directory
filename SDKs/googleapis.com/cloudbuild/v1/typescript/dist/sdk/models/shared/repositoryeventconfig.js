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
import { PullRequestFilter } from "./pullrequestfilter";
import { PushFilter } from "./pushfilter";
export var RepositoryEventConfigRepositoryTypeEnum;
(function (RepositoryEventConfigRepositoryTypeEnum) {
    RepositoryEventConfigRepositoryTypeEnum["RepositoryTypeUnspecified"] = "REPOSITORY_TYPE_UNSPECIFIED";
    RepositoryEventConfigRepositoryTypeEnum["Github"] = "GITHUB";
    RepositoryEventConfigRepositoryTypeEnum["GithubEnterprise"] = "GITHUB_ENTERPRISE";
    RepositoryEventConfigRepositoryTypeEnum["GitlabEnterprise"] = "GITLAB_ENTERPRISE";
})(RepositoryEventConfigRepositoryTypeEnum || (RepositoryEventConfigRepositoryTypeEnum = {}));
// RepositoryEventConfig
/**
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
var RepositoryEventConfig = /** @class */ (function (_super) {
    __extends(RepositoryEventConfig, _super);
    function RepositoryEventConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequest" }),
        __metadata("design:type", PullRequestFilter)
    ], RepositoryEventConfig.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", PushFilter)
    ], RepositoryEventConfig.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], RepositoryEventConfig.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryType" }),
        __metadata("design:type", String)
    ], RepositoryEventConfig.prototype, "repositoryType", void 0);
    return RepositoryEventConfig;
}(SpeakeasyBase));
export { RepositoryEventConfig };
// RepositoryEventConfigInput
/**
 * The configuration of a trigger that creates a build whenever an event from Repo API is received.
**/
var RepositoryEventConfigInput = /** @class */ (function (_super) {
    __extends(RepositoryEventConfigInput, _super);
    function RepositoryEventConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequest" }),
        __metadata("design:type", PullRequestFilter)
    ], RepositoryEventConfigInput.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push" }),
        __metadata("design:type", PushFilter)
    ], RepositoryEventConfigInput.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], RepositoryEventConfigInput.prototype, "repository", void 0);
    return RepositoryEventConfigInput;
}(SpeakeasyBase));
export { RepositoryEventConfigInput };
