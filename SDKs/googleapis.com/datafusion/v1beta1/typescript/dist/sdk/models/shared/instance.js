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
import { Accelerator } from "./accelerator";
import { Version } from "./version";
import { CryptoKeyConfig } from "./cryptokeyconfig";
import { EventPublishConfig } from "./eventpublishconfig";
import { NetworkConfig } from "./networkconfig";
export var InstanceDisabledReasonEnum;
(function (InstanceDisabledReasonEnum) {
    InstanceDisabledReasonEnum["DisabledReasonUnspecified"] = "DISABLED_REASON_UNSPECIFIED";
    InstanceDisabledReasonEnum["KmsKeyIssue"] = "KMS_KEY_ISSUE";
})(InstanceDisabledReasonEnum || (InstanceDisabledReasonEnum = {}));
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Running"] = "RUNNING";
    InstanceStateEnum["Failed"] = "FAILED";
    InstanceStateEnum["Deleting"] = "DELETING";
    InstanceStateEnum["Upgrading"] = "UPGRADING";
    InstanceStateEnum["Restarting"] = "RESTARTING";
    InstanceStateEnum["Updating"] = "UPDATING";
    InstanceStateEnum["AutoUpdating"] = "AUTO_UPDATING";
    InstanceStateEnum["AutoUpgrading"] = "AUTO_UPGRADING";
    InstanceStateEnum["Disabled"] = "DISABLED";
})(InstanceStateEnum || (InstanceStateEnum = {}));
export var InstanceTypeEnum;
(function (InstanceTypeEnum) {
    InstanceTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    InstanceTypeEnum["Basic"] = "BASIC";
    InstanceTypeEnum["Enterprise"] = "ENTERPRISE";
    InstanceTypeEnum["Developer"] = "DEVELOPER";
})(InstanceTypeEnum || (InstanceTypeEnum = {}));
// Instance
/**
 * Represents a Data Fusion instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator }),
        __metadata("design:type", Array)
    ], Instance.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "apiEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableVersion", elemType: Version }),
        __metadata("design:type", Array)
    ], Instance.prototype, "availableVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyConfig" }),
        __metadata("design:type", CryptoKeyConfig)
    ], Instance.prototype, "cryptoKeyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataprocServiceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataprocServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Instance.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabledReason" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "disabledReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableRbac" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableRbac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableStackdriverLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventPublishConfig" }),
        __metadata("design:type", EventPublishConfig)
    ], Instance.prototype, "eventPublishConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], Instance.prototype, "gcsBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], Instance.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=p4ServiceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "p4ServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateInstance" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "privateInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Instance.prototype, "stateMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenantProjectId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "tenantProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Instance.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Instance.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], Instance.prototype, "zone", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
// InstanceInput
/**
 * Represents a Data Fusion instance.
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableVersion", elemType: Version }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "availableVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyConfig" }),
        __metadata("design:type", CryptoKeyConfig)
    ], InstanceInput.prototype, "cryptoKeyConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataprocServiceAccount" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "dataprocServiceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableRbac" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableRbac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableStackdriverLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventPublishConfig" }),
        __metadata("design:type", EventPublishConfig)
    ], InstanceInput.prototype, "eventPublishConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], InstanceInput.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Map)
    ], InstanceInput.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateInstance" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "privateInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "zone", void 0);
    return InstanceInput;
}(SpeakeasyBase));
export { InstanceInput };
