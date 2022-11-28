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
import { Config } from "./config";
export var ContainerThreatDetectionSettingsServiceEnablementStateEnum;
(function (ContainerThreatDetectionSettingsServiceEnablementStateEnum) {
    ContainerThreatDetectionSettingsServiceEnablementStateEnum["EnablementStateUnspecified"] = "ENABLEMENT_STATE_UNSPECIFIED";
    ContainerThreatDetectionSettingsServiceEnablementStateEnum["Inherited"] = "INHERITED";
    ContainerThreatDetectionSettingsServiceEnablementStateEnum["Enabled"] = "ENABLED";
    ContainerThreatDetectionSettingsServiceEnablementStateEnum["Disabled"] = "DISABLED";
})(ContainerThreatDetectionSettingsServiceEnablementStateEnum || (ContainerThreatDetectionSettingsServiceEnablementStateEnum = {}));
// ContainerThreatDetectionSettings
/**
 * Resource capturing the settings for the Container Threat Detection service.
**/
var ContainerThreatDetectionSettings = /** @class */ (function (_super) {
    __extends(ContainerThreatDetectionSettings, _super);
    function ContainerThreatDetectionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modules", elemType: Config }),
        __metadata("design:type", Map)
    ], ContainerThreatDetectionSettings.prototype, "modules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettings.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceEnablementState" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettings.prototype, "serviceEnablementState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettings.prototype, "updateTime", void 0);
    return ContainerThreatDetectionSettings;
}(SpeakeasyBase));
export { ContainerThreatDetectionSettings };
// ContainerThreatDetectionSettingsInput
/**
 * Resource capturing the settings for the Container Threat Detection service.
**/
var ContainerThreatDetectionSettingsInput = /** @class */ (function (_super) {
    __extends(ContainerThreatDetectionSettingsInput, _super);
    function ContainerThreatDetectionSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modules", elemType: Config }),
        __metadata("design:type", Map)
    ], ContainerThreatDetectionSettingsInput.prototype, "modules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettingsInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceEnablementState" }),
        __metadata("design:type", String)
    ], ContainerThreatDetectionSettingsInput.prototype, "serviceEnablementState", void 0);
    return ContainerThreatDetectionSettingsInput;
}(SpeakeasyBase));
export { ContainerThreatDetectionSettingsInput };
