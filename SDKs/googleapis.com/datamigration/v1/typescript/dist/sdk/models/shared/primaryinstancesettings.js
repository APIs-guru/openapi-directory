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
import { MachineConfig } from "./machineconfig";
// PrimaryInstanceSettingsInput
/**
 * Settings for the cluster's primary instance
**/
var PrimaryInstanceSettingsInput = /** @class */ (function (_super) {
    __extends(PrimaryInstanceSettingsInput, _super);
    function PrimaryInstanceSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseFlags" }),
        __metadata("design:type", Map)
    ], PrimaryInstanceSettingsInput.prototype, "databaseFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PrimaryInstanceSettingsInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PrimaryInstanceSettingsInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineConfig" }),
        __metadata("design:type", MachineConfig)
    ], PrimaryInstanceSettingsInput.prototype, "machineConfig", void 0);
    return PrimaryInstanceSettingsInput;
}(SpeakeasyBase));
export { PrimaryInstanceSettingsInput };
// PrimaryInstanceSettings
/**
 * Settings for the cluster's primary instance
**/
var PrimaryInstanceSettings = /** @class */ (function (_super) {
    __extends(PrimaryInstanceSettings, _super);
    function PrimaryInstanceSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseFlags" }),
        __metadata("design:type", Map)
    ], PrimaryInstanceSettings.prototype, "databaseFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PrimaryInstanceSettings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PrimaryInstanceSettings.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineConfig" }),
        __metadata("design:type", MachineConfig)
    ], PrimaryInstanceSettings.prototype, "machineConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIp" }),
        __metadata("design:type", String)
    ], PrimaryInstanceSettings.prototype, "privateIp", void 0);
    return PrimaryInstanceSettings;
}(SpeakeasyBase));
export { PrimaryInstanceSettings };
