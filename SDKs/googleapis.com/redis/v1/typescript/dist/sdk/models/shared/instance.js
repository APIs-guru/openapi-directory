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
import { MaintenancePolicy } from "./maintenancepolicy";
import { MaintenanceSchedule } from "./maintenanceschedule";
import { PersistenceConfig } from "./persistenceconfig";
export var InstanceConnectModeEnum;
(function (InstanceConnectModeEnum) {
    InstanceConnectModeEnum["ConnectModeUnspecified"] = "CONNECT_MODE_UNSPECIFIED";
    InstanceConnectModeEnum["DirectPeering"] = "DIRECT_PEERING";
    InstanceConnectModeEnum["PrivateServiceAccess"] = "PRIVATE_SERVICE_ACCESS";
})(InstanceConnectModeEnum || (InstanceConnectModeEnum = {}));
export var InstanceReadReplicasModeEnum;
(function (InstanceReadReplicasModeEnum) {
    InstanceReadReplicasModeEnum["ReadReplicasModeUnspecified"] = "READ_REPLICAS_MODE_UNSPECIFIED";
    InstanceReadReplicasModeEnum["ReadReplicasDisabled"] = "READ_REPLICAS_DISABLED";
    InstanceReadReplicasModeEnum["ReadReplicasEnabled"] = "READ_REPLICAS_ENABLED";
})(InstanceReadReplicasModeEnum || (InstanceReadReplicasModeEnum = {}));
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Ready"] = "READY";
    InstanceStateEnum["Updating"] = "UPDATING";
    InstanceStateEnum["Deleting"] = "DELETING";
    InstanceStateEnum["Repairing"] = "REPAIRING";
    InstanceStateEnum["Maintenance"] = "MAINTENANCE";
    InstanceStateEnum["Importing"] = "IMPORTING";
    InstanceStateEnum["FailingOver"] = "FAILING_OVER";
})(InstanceStateEnum || (InstanceStateEnum = {}));
export var InstanceSuspensionReasonsEnum;
(function (InstanceSuspensionReasonsEnum) {
    InstanceSuspensionReasonsEnum["SuspensionReasonUnspecified"] = "SUSPENSION_REASON_UNSPECIFIED";
    InstanceSuspensionReasonsEnum["CustomerManagedKeyIssue"] = "CUSTOMER_MANAGED_KEY_ISSUE";
})(InstanceSuspensionReasonsEnum || (InstanceSuspensionReasonsEnum = {}));
export var InstanceTierEnum;
(function (InstanceTierEnum) {
    InstanceTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    InstanceTierEnum["Basic"] = "BASIC";
    InstanceTierEnum["StandardHa"] = "STANDARD_HA";
})(InstanceTierEnum || (InstanceTierEnum = {}));
export var InstanceTransitEncryptionModeEnum;
(function (InstanceTransitEncryptionModeEnum) {
    InstanceTransitEncryptionModeEnum["TransitEncryptionModeUnspecified"] = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED";
    InstanceTransitEncryptionModeEnum["ServerAuthentication"] = "SERVER_AUTHENTICATION";
    InstanceTransitEncryptionModeEnum["Disabled"] = "DISABLED";
})(InstanceTransitEncryptionModeEnum || (InstanceTransitEncryptionModeEnum = {}));
// Instance
/**
 * A Memorystore for Redis instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alternativeLocationId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "alternativeLocationId", void 0);
    __decorate([
        Metadata({ data: "json, name=authEnabled" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "authEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=authorizedNetwork" }),
        __metadata("design:type", String)
    ], Instance.prototype, "authorizedNetwork", void 0);
    __decorate([
        Metadata({ data: "json, name=connectMode" }),
        __metadata("design:type", String)
    ], Instance.prototype, "connectMode", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=currentLocationId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "currentLocationId", void 0);
    __decorate([
        Metadata({ data: "json, name=customerManagedKey" }),
        __metadata("design:type", String)
    ], Instance.prototype, "customerManagedKey", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], Instance.prototype, "host", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "json, name=maintenancePolicy" }),
        __metadata("design:type", MaintenancePolicy)
    ], Instance.prototype, "maintenancePolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=maintenanceSchedule" }),
        __metadata("design:type", MaintenanceSchedule)
    ], Instance.prototype, "maintenanceSchedule", void 0);
    __decorate([
        Metadata({ data: "json, name=memorySizeGb" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "memorySizeGb", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nodes", elemType: shared.NodeInfo }),
        __metadata("design:type", Array)
    ], Instance.prototype, "nodes", void 0);
    __decorate([
        Metadata({ data: "json, name=persistenceConfig" }),
        __metadata("design:type", PersistenceConfig)
    ], Instance.prototype, "persistenceConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=persistenceIamIdentity" }),
        __metadata("design:type", String)
    ], Instance.prototype, "persistenceIamIdentity", void 0);
    __decorate([
        Metadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=readEndpoint" }),
        __metadata("design:type", String)
    ], Instance.prototype, "readEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=readEndpointPort" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "readEndpointPort", void 0);
    __decorate([
        Metadata({ data: "json, name=readReplicasMode" }),
        __metadata("design:type", String)
    ], Instance.prototype, "readReplicasMode", void 0);
    __decorate([
        Metadata({ data: "json, name=redisConfigs" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "redisConfigs", void 0);
    __decorate([
        Metadata({ data: "json, name=redisVersion" }),
        __metadata("design:type", String)
    ], Instance.prototype, "redisVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=replicaCount" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "replicaCount", void 0);
    __decorate([
        Metadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], Instance.prototype, "reservedIpRange", void 0);
    __decorate([
        Metadata({ data: "json, name=secondaryIpRange" }),
        __metadata("design:type", String)
    ], Instance.prototype, "secondaryIpRange", void 0);
    __decorate([
        Metadata({ data: "json, name=serverCaCerts", elemType: shared.TlsCertificate }),
        __metadata("design:type", Array)
    ], Instance.prototype, "serverCaCerts", void 0);
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
    __decorate([
        Metadata({ data: "json, name=transitEncryptionMode" }),
        __metadata("design:type", String)
    ], Instance.prototype, "transitEncryptionMode", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
