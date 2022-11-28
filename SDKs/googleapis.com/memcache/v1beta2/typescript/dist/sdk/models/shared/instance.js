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
import { InstanceMessage } from "./instancemessage";
import { GoogleCloudMemcacheV1beta2MaintenancePolicyInput } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { NodeConfig } from "./nodeconfig";
import { MemcacheParametersInput } from "./memcacheparameters";
import { GoogleCloudMemcacheV1beta2MaintenancePolicy } from "./googlecloudmemcachev1beta2maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { Node } from "./node";
import { MemcacheParameters } from "./memcacheparameters";
export var InstanceMemcacheVersionEnum;
(function (InstanceMemcacheVersionEnum) {
    InstanceMemcacheVersionEnum["MemcacheVersionUnspecified"] = "MEMCACHE_VERSION_UNSPECIFIED";
    InstanceMemcacheVersionEnum["Memcache15"] = "MEMCACHE_1_5";
})(InstanceMemcacheVersionEnum || (InstanceMemcacheVersionEnum = {}));
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Ready"] = "READY";
    InstanceStateEnum["Updating"] = "UPDATING";
    InstanceStateEnum["Deleting"] = "DELETING";
    InstanceStateEnum["PerformingMaintenance"] = "PERFORMING_MAINTENANCE";
})(InstanceStateEnum || (InstanceStateEnum = {}));
// InstanceInput
/**
 * A Memorystore for Memcached instance
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedNetwork" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "authorizedNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceMessages", elemType: InstanceMessage }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "instanceMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenancePolicy" }),
        __metadata("design:type", GoogleCloudMemcacheV1beta2MaintenancePolicyInput)
    ], InstanceInput.prototype, "maintenancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memcacheVersion" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "memcacheVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], InstanceInput.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], InstanceInput.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", MemcacheParametersInput)
    ], InstanceInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zones" }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "zones", void 0);
    return InstanceInput;
}(SpeakeasyBase));
export { InstanceInput };
// Instance
/**
 * A Memorystore for Memcached instance
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedNetwork" }),
        __metadata("design:type", String)
    ], Instance.prototype, "authorizedNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoveryEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "discoveryEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceMessages", elemType: InstanceMessage }),
        __metadata("design:type", Array)
    ], Instance.prototype, "instanceMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenancePolicy" }),
        __metadata("design:type", GoogleCloudMemcacheV1beta2MaintenancePolicy)
    ], Instance.prototype, "maintenancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceSchedule" }),
        __metadata("design:type", MaintenanceSchedule)
    ], Instance.prototype, "maintenanceSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memcacheFullVersion" }),
        __metadata("design:type", String)
    ], Instance.prototype, "memcacheFullVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memcacheNodes", elemType: Node }),
        __metadata("design:type", Array)
    ], Instance.prototype, "memcacheNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memcacheVersion" }),
        __metadata("design:type", String)
    ], Instance.prototype, "memcacheVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], Instance.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", MemcacheParameters)
    ], Instance.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateAvailable" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "updateAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zones" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "zones", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
