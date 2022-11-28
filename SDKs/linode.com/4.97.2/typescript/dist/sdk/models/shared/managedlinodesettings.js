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
// ManagedLinodeSettingsSsh
/**
 * The SSH settings for this Linode.
 *
**/
var ManagedLinodeSettingsSsh = /** @class */ (function (_super) {
    __extends(ManagedLinodeSettingsSsh, _super);
    function ManagedLinodeSettingsSsh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", Boolean)
    ], ManagedLinodeSettingsSsh.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], ManagedLinodeSettingsSsh.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ManagedLinodeSettingsSsh.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ManagedLinodeSettingsSsh.prototype, "user", void 0);
    return ManagedLinodeSettingsSsh;
}(SpeakeasyBase));
export { ManagedLinodeSettingsSsh };
// ManagedLinodeSettingsInput
/**
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 *
**/
var ManagedLinodeSettingsInput = /** @class */ (function (_super) {
    __extends(ManagedLinodeSettingsInput, _super);
    function ManagedLinodeSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh" }),
        __metadata("design:type", ManagedLinodeSettingsSsh)
    ], ManagedLinodeSettingsInput.prototype, "ssh", void 0);
    return ManagedLinodeSettingsInput;
}(SpeakeasyBase));
export { ManagedLinodeSettingsInput };
// ManagedLinodeSettings
/**
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 *
**/
var ManagedLinodeSettings = /** @class */ (function (_super) {
    __extends(ManagedLinodeSettings, _super);
    function ManagedLinodeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], ManagedLinodeSettings.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ManagedLinodeSettings.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ManagedLinodeSettings.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh" }),
        __metadata("design:type", ManagedLinodeSettingsSsh)
    ], ManagedLinodeSettings.prototype, "ssh", void 0);
    return ManagedLinodeSettings;
}(SpeakeasyBase));
export { ManagedLinodeSettings };
