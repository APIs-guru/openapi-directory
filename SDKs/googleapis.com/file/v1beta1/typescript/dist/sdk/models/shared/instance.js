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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Ready"] = "READY";
    InstanceStateEnum["Repairing"] = "REPAIRING";
    InstanceStateEnum["Deleting"] = "DELETING";
    InstanceStateEnum["Error"] = "ERROR";
    InstanceStateEnum["Restoring"] = "RESTORING";
    InstanceStateEnum["Suspended"] = "SUSPENDED";
    InstanceStateEnum["Reverting"] = "REVERTING";
})(InstanceStateEnum || (InstanceStateEnum = {}));
export var InstanceSuspensionReasonsEnum;
(function (InstanceSuspensionReasonsEnum) {
    InstanceSuspensionReasonsEnum["SuspensionReasonUnspecified"] = "SUSPENSION_REASON_UNSPECIFIED";
    InstanceSuspensionReasonsEnum["KmsKeyIssue"] = "KMS_KEY_ISSUE";
})(InstanceSuspensionReasonsEnum || (InstanceSuspensionReasonsEnum = {}));
export var InstanceTierEnum;
(function (InstanceTierEnum) {
    InstanceTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    InstanceTierEnum["Standard"] = "STANDARD";
    InstanceTierEnum["Premium"] = "PREMIUM";
    InstanceTierEnum["BasicHdd"] = "BASIC_HDD";
    InstanceTierEnum["BasicSsd"] = "BASIC_SSD";
    InstanceTierEnum["HighScaleSsd"] = "HIGH_SCALE_SSD";
    InstanceTierEnum["Enterprise"] = "ENTERPRISE";
})(InstanceTierEnum || (InstanceTierEnum = {}));
// Instance
/**
 * A Filestore instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=capacityGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "capacityGb", void 0);
    __decorate([
        Metadata({ data: "json, name=capacityStepSizeGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "capacityStepSizeGb", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Instance.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Instance.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=fileShares", elemType: shared.FileShareConfig }),
        __metadata("design:type", Array)
    ], Instance.prototype, "fileShares", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=maxCapacityGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "maxCapacityGb", void 0);
    __decorate([
        Metadata({ data: "json, name=maxShareCount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "maxShareCount", void 0);
    __decorate([
        Metadata({ data: "json, name=multiShareEnabled" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "multiShareEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=networks", elemType: shared.NetworkConfig }),
        __metadata("design:type", Array)
    ], Instance.prototype, "networks", void 0);
    __decorate([
        Metadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "satisfiesPzs", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Instance.prototype, "statusMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=suspensionReasons" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "suspensionReasons", void 0);
    __decorate([
        Metadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], Instance.prototype, "tier", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
