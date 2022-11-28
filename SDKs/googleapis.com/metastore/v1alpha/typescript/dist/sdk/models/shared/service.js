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
import { EncryptionConfig } from "./encryptionconfig";
import { HiveMetastoreConfig } from "./hivemetastoreconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MetadataIntegration } from "./metadataintegration";
import { MetadataManagementActivity } from "./metadatamanagementactivity";
import { NetworkConfig } from "./networkconfig";
import { TelemetryConfig } from "./telemetryconfig";
import { HiveMetastoreConfigInput } from "./hivemetastoreconfig";
import { NetworkConfigInput } from "./networkconfig";
export var ServiceDatabaseTypeEnum;
(function (ServiceDatabaseTypeEnum) {
    ServiceDatabaseTypeEnum["DatabaseTypeUnspecified"] = "DATABASE_TYPE_UNSPECIFIED";
    ServiceDatabaseTypeEnum["Mysql"] = "MYSQL";
    ServiceDatabaseTypeEnum["Spanner"] = "SPANNER";
})(ServiceDatabaseTypeEnum || (ServiceDatabaseTypeEnum = {}));
export var ServiceReleaseChannelEnum;
(function (ServiceReleaseChannelEnum) {
    ServiceReleaseChannelEnum["ReleaseChannelUnspecified"] = "RELEASE_CHANNEL_UNSPECIFIED";
    ServiceReleaseChannelEnum["Canary"] = "CANARY";
    ServiceReleaseChannelEnum["Stable"] = "STABLE";
})(ServiceReleaseChannelEnum || (ServiceReleaseChannelEnum = {}));
export var ServiceStateEnum;
(function (ServiceStateEnum) {
    ServiceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ServiceStateEnum["Creating"] = "CREATING";
    ServiceStateEnum["Active"] = "ACTIVE";
    ServiceStateEnum["Suspending"] = "SUSPENDING";
    ServiceStateEnum["Suspended"] = "SUSPENDED";
    ServiceStateEnum["Updating"] = "UPDATING";
    ServiceStateEnum["Deleting"] = "DELETING";
    ServiceStateEnum["Error"] = "ERROR";
})(ServiceStateEnum || (ServiceStateEnum = {}));
export var ServiceTierEnum;
(function (ServiceTierEnum) {
    ServiceTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    ServiceTierEnum["Developer"] = "DEVELOPER";
    ServiceTierEnum["Enterprise"] = "ENTERPRISE";
})(ServiceTierEnum || (ServiceTierEnum = {}));
// Service
/**
 * A managed metastore service that serves metadata queries.
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactGcsUri" }),
        __metadata("design:type", String)
    ], Service.prototype, "artifactGcsUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Service.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseType" }),
        __metadata("design:type", String)
    ], Service.prototype, "databaseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], Service.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointUri" }),
        __metadata("design:type", String)
    ], Service.prototype, "endpointUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiveMetastoreConfig" }),
        __metadata("design:type", HiveMetastoreConfig)
    ], Service.prototype, "hiveMetastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Service.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], Service.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataIntegration" }),
        __metadata("design:type", MetadataIntegration)
    ], Service.prototype, "metadataIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataManagementActivity" }),
        __metadata("design:type", MetadataManagementActivity)
    ], Service.prototype, "metadataManagementActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Service.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], Service.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Service.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseChannel" }),
        __metadata("design:type", String)
    ], Service.prototype, "releaseChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Service.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Service.prototype, "stateMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telemetryConfig" }),
        __metadata("design:type", TelemetryConfig)
    ], Service.prototype, "telemetryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], Service.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Service.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Service.prototype, "updateTime", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
// ServiceInput
/**
 * A managed metastore service that serves metadata queries.
**/
var ServiceInput = /** @class */ (function (_super) {
    __extends(ServiceInput, _super);
    function ServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseType" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "databaseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], ServiceInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiveMetastoreConfig" }),
        __metadata("design:type", HiveMetastoreConfigInput)
    ], ServiceInput.prototype, "hiveMetastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ServiceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], ServiceInput.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataIntegration" }),
        __metadata("design:type", MetadataIntegration)
    ], ServiceInput.prototype, "metadataIntegration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfigInput)
    ], ServiceInput.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ServiceInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseChannel" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "releaseChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telemetryConfig" }),
        __metadata("design:type", TelemetryConfig)
    ], ServiceInput.prototype, "telemetryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "tier", void 0);
    return ServiceInput;
}(SpeakeasyBase));
export { ServiceInput };
