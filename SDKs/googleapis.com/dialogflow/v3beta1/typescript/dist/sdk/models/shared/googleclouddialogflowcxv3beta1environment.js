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
import { GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig } from "./googleclouddialogflowcxv3beta1environmenttestcasesconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig } from "./googleclouddialogflowcxv3beta1environmentversionconfig";
import { GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig } from "./googleclouddialogflowcxv3beta1environmentwebhookconfig";
// GoogleCloudDialogflowCxV3beta1EnvironmentInput
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
var GoogleCloudDialogflowCxV3beta1EnvironmentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1EnvironmentInput, _super);
    function GoogleCloudDialogflowCxV3beta1EnvironmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCasesConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "testCasesConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionConfigs", elemType: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "versionConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig)
    ], GoogleCloudDialogflowCxV3beta1EnvironmentInput.prototype, "webhookConfig", void 0);
    return GoogleCloudDialogflowCxV3beta1EnvironmentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1EnvironmentInput };
// GoogleCloudDialogflowCxV3beta1Environment
/**
 * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
**/
var GoogleCloudDialogflowCxV3beta1Environment = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Environment, _super);
    function GoogleCloudDialogflowCxV3beta1Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testCasesConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "testCasesConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionConfigs", elemType: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "versionConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig)
    ], GoogleCloudDialogflowCxV3beta1Environment.prototype, "webhookConfig", void 0);
    return GoogleCloudDialogflowCxV3beta1Environment;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Environment };
