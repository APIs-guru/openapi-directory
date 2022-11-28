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
import { NodeManagement } from "./nodemanagement";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeSettings } from "./upgradesettings";
// AutoprovisioningNodePoolDefaults
/**
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
**/
var AutoprovisioningNodePoolDefaults = /** @class */ (function (_super) {
    __extends(AutoprovisioningNodePoolDefaults, _super);
    function AutoprovisioningNodePoolDefaults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" }),
        __metadata("design:type", String)
    ], AutoprovisioningNodePoolDefaults.prototype, "bootDiskKmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", Number)
    ], AutoprovisioningNodePoolDefaults.prototype, "diskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], AutoprovisioningNodePoolDefaults.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageType" }),
        __metadata("design:type", String)
    ], AutoprovisioningNodePoolDefaults.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=management" }),
        __metadata("design:type", NodeManagement)
    ], AutoprovisioningNodePoolDefaults.prototype, "management", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCpuPlatform" }),
        __metadata("design:type", String)
    ], AutoprovisioningNodePoolDefaults.prototype, "minCpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthScopes" }),
        __metadata("design:type", Array)
    ], AutoprovisioningNodePoolDefaults.prototype, "oauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], AutoprovisioningNodePoolDefaults.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", ShieldedInstanceConfig)
    ], AutoprovisioningNodePoolDefaults.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeSettings" }),
        __metadata("design:type", UpgradeSettings)
    ], AutoprovisioningNodePoolDefaults.prototype, "upgradeSettings", void 0);
    return AutoprovisioningNodePoolDefaults;
}(SpeakeasyBase));
export { AutoprovisioningNodePoolDefaults };
