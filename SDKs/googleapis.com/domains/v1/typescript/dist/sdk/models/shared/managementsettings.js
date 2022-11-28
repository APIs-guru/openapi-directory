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
export var ManagementSettingsRenewalMethodEnum;
(function (ManagementSettingsRenewalMethodEnum) {
    ManagementSettingsRenewalMethodEnum["RenewalMethodUnspecified"] = "RENEWAL_METHOD_UNSPECIFIED";
    ManagementSettingsRenewalMethodEnum["AutomaticRenewal"] = "AUTOMATIC_RENEWAL";
    ManagementSettingsRenewalMethodEnum["ManualRenewal"] = "MANUAL_RENEWAL";
})(ManagementSettingsRenewalMethodEnum || (ManagementSettingsRenewalMethodEnum = {}));
export var ManagementSettingsTransferLockStateEnum;
(function (ManagementSettingsTransferLockStateEnum) {
    ManagementSettingsTransferLockStateEnum["TransferLockStateUnspecified"] = "TRANSFER_LOCK_STATE_UNSPECIFIED";
    ManagementSettingsTransferLockStateEnum["Unlocked"] = "UNLOCKED";
    ManagementSettingsTransferLockStateEnum["Locked"] = "LOCKED";
})(ManagementSettingsTransferLockStateEnum || (ManagementSettingsTransferLockStateEnum = {}));
// ManagementSettingsInput
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
var ManagementSettingsInput = /** @class */ (function (_super) {
    __extends(ManagementSettingsInput, _super);
    function ManagementSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferLockState" }),
        __metadata("design:type", String)
    ], ManagementSettingsInput.prototype, "transferLockState", void 0);
    return ManagementSettingsInput;
}(SpeakeasyBase));
export { ManagementSettingsInput };
// ManagementSettings
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
var ManagementSettings = /** @class */ (function (_super) {
    __extends(ManagementSettings, _super);
    function ManagementSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewalMethod" }),
        __metadata("design:type", String)
    ], ManagementSettings.prototype, "renewalMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferLockState" }),
        __metadata("design:type", String)
    ], ManagementSettings.prototype, "transferLockState", void 0);
    return ManagementSettings;
}(SpeakeasyBase));
export { ManagementSettings };
