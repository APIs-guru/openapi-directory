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
import { ReplicaInfo } from "./replicainfo";
export var InstanceConfigConfigTypeEnum;
(function (InstanceConfigConfigTypeEnum) {
    InstanceConfigConfigTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    InstanceConfigConfigTypeEnum["GoogleManaged"] = "GOOGLE_MANAGED";
    InstanceConfigConfigTypeEnum["UserManaged"] = "USER_MANAGED";
})(InstanceConfigConfigTypeEnum || (InstanceConfigConfigTypeEnum = {}));
export var InstanceConfigFreeInstanceAvailabilityEnum;
(function (InstanceConfigFreeInstanceAvailabilityEnum) {
    InstanceConfigFreeInstanceAvailabilityEnum["FreeInstanceAvailabilityUnspecified"] = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED";
    InstanceConfigFreeInstanceAvailabilityEnum["Available"] = "AVAILABLE";
    InstanceConfigFreeInstanceAvailabilityEnum["Unsupported"] = "UNSUPPORTED";
    InstanceConfigFreeInstanceAvailabilityEnum["Disabled"] = "DISABLED";
    InstanceConfigFreeInstanceAvailabilityEnum["QuotaExceeded"] = "QUOTA_EXCEEDED";
})(InstanceConfigFreeInstanceAvailabilityEnum || (InstanceConfigFreeInstanceAvailabilityEnum = {}));
export var InstanceConfigStateEnum;
(function (InstanceConfigStateEnum) {
    InstanceConfigStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceConfigStateEnum["Creating"] = "CREATING";
    InstanceConfigStateEnum["Ready"] = "READY";
})(InstanceConfigStateEnum || (InstanceConfigStateEnum = {}));
// InstanceConfig
/**
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
var InstanceConfig = /** @class */ (function (_super) {
    __extends(InstanceConfig, _super);
    function InstanceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseConfig" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "baseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configType" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "configType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeInstanceAvailability" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "freeInstanceAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceConfig.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaderOptions" }),
        __metadata("design:type", Array)
    ], InstanceConfig.prototype, "leaderOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionalReplicas", elemType: ReplicaInfo }),
        __metadata("design:type", Array)
    ], InstanceConfig.prototype, "optionalReplicas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], InstanceConfig.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicas", elemType: ReplicaInfo }),
        __metadata("design:type", Array)
    ], InstanceConfig.prototype, "replicas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], InstanceConfig.prototype, "state", void 0);
    return InstanceConfig;
}(SpeakeasyBase));
export { InstanceConfig };
// InstanceConfigInput
/**
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
var InstanceConfigInput = /** @class */ (function (_super) {
    __extends(InstanceConfigInput, _super);
    function InstanceConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseConfig" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "baseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceConfigInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaderOptions" }),
        __metadata("design:type", Array)
    ], InstanceConfigInput.prototype, "leaderOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicas", elemType: ReplicaInfo }),
        __metadata("design:type", Array)
    ], InstanceConfigInput.prototype, "replicas", void 0);
    return InstanceConfigInput;
}(SpeakeasyBase));
export { InstanceConfigInput };
