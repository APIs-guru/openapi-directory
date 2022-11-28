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
import { UserPasswordInput } from "./userpassword";
import { PrimaryInstanceSettingsInput } from "./primaryinstancesettings";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";
// AlloyDbSettingsInput
/**
 * Settings for creating an AlloyDB cluster.
**/
var AlloyDbSettingsInput = /** @class */ (function (_super) {
    __extends(AlloyDbSettingsInput, _super);
    function AlloyDbSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialUser" }),
        __metadata("design:type", UserPasswordInput)
    ], AlloyDbSettingsInput.prototype, "initialUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], AlloyDbSettingsInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" }),
        __metadata("design:type", PrimaryInstanceSettingsInput)
    ], AlloyDbSettingsInput.prototype, "primaryInstanceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcNetwork" }),
        __metadata("design:type", String)
    ], AlloyDbSettingsInput.prototype, "vpcNetwork", void 0);
    return AlloyDbSettingsInput;
}(SpeakeasyBase));
export { AlloyDbSettingsInput };
// AlloyDbSettings
/**
 * Settings for creating an AlloyDB cluster.
**/
var AlloyDbSettings = /** @class */ (function (_super) {
    __extends(AlloyDbSettings, _super);
    function AlloyDbSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialUser" }),
        __metadata("design:type", UserPassword)
    ], AlloyDbSettings.prototype, "initialUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], AlloyDbSettings.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" }),
        __metadata("design:type", PrimaryInstanceSettings)
    ], AlloyDbSettings.prototype, "primaryInstanceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcNetwork" }),
        __metadata("design:type", String)
    ], AlloyDbSettings.prototype, "vpcNetwork", void 0);
    return AlloyDbSettings;
}(SpeakeasyBase));
export { AlloyDbSettings };
