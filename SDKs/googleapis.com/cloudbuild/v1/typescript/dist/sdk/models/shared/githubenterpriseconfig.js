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
import { GitHubEnterpriseSecrets } from "./githubenterprisesecrets";
// GitHubEnterpriseConfig
/**
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
var GitHubEnterpriseConfig = /** @class */ (function (_super) {
    __extends(GitHubEnterpriseConfig, _super);
    function GitHubEnterpriseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostUrl" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "hostUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeredNetwork" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "peeredNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", GitHubEnterpriseSecrets)
    ], GitHubEnterpriseConfig.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCa" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "sslCa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookKey" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfig.prototype, "webhookKey", void 0);
    return GitHubEnterpriseConfig;
}(SpeakeasyBase));
export { GitHubEnterpriseConfig };
// GitHubEnterpriseConfigInput
/**
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
var GitHubEnterpriseConfigInput = /** @class */ (function (_super) {
    __extends(GitHubEnterpriseConfigInput, _super);
    function GitHubEnterpriseConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostUrl" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "hostUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeredNetwork" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "peeredNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", GitHubEnterpriseSecrets)
    ], GitHubEnterpriseConfigInput.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCa" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "sslCa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookKey" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseConfigInput.prototype, "webhookKey", void 0);
    return GitHubEnterpriseConfigInput;
}(SpeakeasyBase));
export { GitHubEnterpriseConfigInput };
