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
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
import { GitLabEnterpriseConfig } from "./gitlabenterpriseconfig";
import { GitLabSecrets } from "./gitlabsecrets";
import { GitLabRepositoryId } from "./gitlabrepositoryid";
// GitLabConfigInput
/**
 * GitLabConfig represents the configuration for a GitLab integration.
**/
var GitLabConfigInput = /** @class */ (function (_super) {
    __extends(GitLabConfigInput, _super);
    function GitLabConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: GitLabRepositoryIdInput }),
        __metadata("design:type", Array)
    ], GitLabConfigInput.prototype, "connectedRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseConfig" }),
        __metadata("design:type", GitLabEnterpriseConfig)
    ], GitLabConfigInput.prototype, "enterpriseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitLabConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", GitLabSecrets)
    ], GitLabConfigInput.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GitLabConfigInput.prototype, "username", void 0);
    return GitLabConfigInput;
}(SpeakeasyBase));
export { GitLabConfigInput };
// GitLabConfig
/**
 * GitLabConfig represents the configuration for a GitLab integration.
**/
var GitLabConfig = /** @class */ (function (_super) {
    __extends(GitLabConfig, _super);
    function GitLabConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: GitLabRepositoryId }),
        __metadata("design:type", Array)
    ], GitLabConfig.prototype, "connectedRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GitLabConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseConfig" }),
        __metadata("design:type", GitLabEnterpriseConfig)
    ], GitLabConfig.prototype, "enterpriseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitLabConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", GitLabSecrets)
    ], GitLabConfig.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GitLabConfig.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookKey" }),
        __metadata("design:type", String)
    ], GitLabConfig.prototype, "webhookKey", void 0);
    return GitLabConfig;
}(SpeakeasyBase));
export { GitLabConfig };
