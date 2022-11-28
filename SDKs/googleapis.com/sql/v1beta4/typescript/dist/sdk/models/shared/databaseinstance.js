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
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { IpMapping } from "./ipmapping";
import { OnPremisesConfiguration } from "./onpremisesconfiguration";
import { SqlOutOfDiskReport } from "./sqloutofdiskreport";
import { ReplicaConfiguration } from "./replicaconfiguration";
import { SqlScheduledMaintenance } from "./sqlscheduledmaintenance";
import { SslCert } from "./sslcert";
import { Settings } from "./settings";
export var DatabaseInstanceBackendTypeEnum;
(function (DatabaseInstanceBackendTypeEnum) {
    DatabaseInstanceBackendTypeEnum["SqlBackendTypeUnspecified"] = "SQL_BACKEND_TYPE_UNSPECIFIED";
    DatabaseInstanceBackendTypeEnum["FirstGen"] = "FIRST_GEN";
    DatabaseInstanceBackendTypeEnum["SecondGen"] = "SECOND_GEN";
    DatabaseInstanceBackendTypeEnum["External"] = "EXTERNAL";
})(DatabaseInstanceBackendTypeEnum || (DatabaseInstanceBackendTypeEnum = {}));
export var DatabaseInstanceDatabaseVersionEnum;
(function (DatabaseInstanceDatabaseVersionEnum) {
    DatabaseInstanceDatabaseVersionEnum["SqlDatabaseVersionUnspecified"] = "SQL_DATABASE_VERSION_UNSPECIFIED";
    DatabaseInstanceDatabaseVersionEnum["Mysql51"] = "MYSQL_5_1";
    DatabaseInstanceDatabaseVersionEnum["Mysql55"] = "MYSQL_5_5";
    DatabaseInstanceDatabaseVersionEnum["Mysql56"] = "MYSQL_5_6";
    DatabaseInstanceDatabaseVersionEnum["Mysql57"] = "MYSQL_5_7";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2017Standard"] = "SQLSERVER_2017_STANDARD";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2017Enterprise"] = "SQLSERVER_2017_ENTERPRISE";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2017Express"] = "SQLSERVER_2017_EXPRESS";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2017Web"] = "SQLSERVER_2017_WEB";
    DatabaseInstanceDatabaseVersionEnum["Postgres96"] = "POSTGRES_9_6";
    DatabaseInstanceDatabaseVersionEnum["Postgres10"] = "POSTGRES_10";
    DatabaseInstanceDatabaseVersionEnum["Postgres11"] = "POSTGRES_11";
    DatabaseInstanceDatabaseVersionEnum["Postgres12"] = "POSTGRES_12";
    DatabaseInstanceDatabaseVersionEnum["Postgres13"] = "POSTGRES_13";
    DatabaseInstanceDatabaseVersionEnum["Postgres14"] = "POSTGRES_14";
    DatabaseInstanceDatabaseVersionEnum["Mysql80"] = "MYSQL_8_0";
    DatabaseInstanceDatabaseVersionEnum["Mysql8018"] = "MYSQL_8_0_18";
    DatabaseInstanceDatabaseVersionEnum["Mysql8026"] = "MYSQL_8_0_26";
    DatabaseInstanceDatabaseVersionEnum["Mysql8027"] = "MYSQL_8_0_27";
    DatabaseInstanceDatabaseVersionEnum["Mysql8028"] = "MYSQL_8_0_28";
    DatabaseInstanceDatabaseVersionEnum["Mysql8029"] = "MYSQL_8_0_29";
    DatabaseInstanceDatabaseVersionEnum["Mysql8030"] = "MYSQL_8_0_30";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2019Standard"] = "SQLSERVER_2019_STANDARD";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2019Enterprise"] = "SQLSERVER_2019_ENTERPRISE";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2019Express"] = "SQLSERVER_2019_EXPRESS";
    DatabaseInstanceDatabaseVersionEnum["Sqlserver2019Web"] = "SQLSERVER_2019_WEB";
})(DatabaseInstanceDatabaseVersionEnum || (DatabaseInstanceDatabaseVersionEnum = {}));
// DatabaseInstanceFailoverReplica
/**
 * The name and status of the failover replica.
**/
var DatabaseInstanceFailoverReplica = /** @class */ (function (_super) {
    __extends(DatabaseInstanceFailoverReplica, _super);
    function DatabaseInstanceFailoverReplica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], DatabaseInstanceFailoverReplica.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseInstanceFailoverReplica.prototype, "name", void 0);
    return DatabaseInstanceFailoverReplica;
}(SpeakeasyBase));
export { DatabaseInstanceFailoverReplica };
export var DatabaseInstanceInstanceTypeEnum;
(function (DatabaseInstanceInstanceTypeEnum) {
    DatabaseInstanceInstanceTypeEnum["SqlInstanceTypeUnspecified"] = "SQL_INSTANCE_TYPE_UNSPECIFIED";
    DatabaseInstanceInstanceTypeEnum["CloudSqlInstance"] = "CLOUD_SQL_INSTANCE";
    DatabaseInstanceInstanceTypeEnum["OnPremisesInstance"] = "ON_PREMISES_INSTANCE";
    DatabaseInstanceInstanceTypeEnum["ReadReplicaInstance"] = "READ_REPLICA_INSTANCE";
})(DatabaseInstanceInstanceTypeEnum || (DatabaseInstanceInstanceTypeEnum = {}));
export var DatabaseInstanceStateEnum;
(function (DatabaseInstanceStateEnum) {
    DatabaseInstanceStateEnum["SqlInstanceStateUnspecified"] = "SQL_INSTANCE_STATE_UNSPECIFIED";
    DatabaseInstanceStateEnum["Runnable"] = "RUNNABLE";
    DatabaseInstanceStateEnum["Suspended"] = "SUSPENDED";
    DatabaseInstanceStateEnum["PendingDelete"] = "PENDING_DELETE";
    DatabaseInstanceStateEnum["PendingCreate"] = "PENDING_CREATE";
    DatabaseInstanceStateEnum["Maintenance"] = "MAINTENANCE";
    DatabaseInstanceStateEnum["Failed"] = "FAILED";
    DatabaseInstanceStateEnum["OnlineMaintenance"] = "ONLINE_MAINTENANCE";
})(DatabaseInstanceStateEnum || (DatabaseInstanceStateEnum = {}));
export var DatabaseInstanceSuspensionReasonEnum;
(function (DatabaseInstanceSuspensionReasonEnum) {
    DatabaseInstanceSuspensionReasonEnum["SqlSuspensionReasonUnspecified"] = "SQL_SUSPENSION_REASON_UNSPECIFIED";
    DatabaseInstanceSuspensionReasonEnum["BillingIssue"] = "BILLING_ISSUE";
    DatabaseInstanceSuspensionReasonEnum["LegalIssue"] = "LEGAL_ISSUE";
    DatabaseInstanceSuspensionReasonEnum["OperationalIssue"] = "OPERATIONAL_ISSUE";
    DatabaseInstanceSuspensionReasonEnum["KmsKeyIssue"] = "KMS_KEY_ISSUE";
})(DatabaseInstanceSuspensionReasonEnum || (DatabaseInstanceSuspensionReasonEnum = {}));
// DatabaseInstance
/**
 * A Cloud SQL instance resource.
**/
var DatabaseInstance = /** @class */ (function (_super) {
    __extends(DatabaseInstance, _super);
    function DatabaseInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableMaintenanceVersions" }),
        __metadata("design:type", Array)
    ], DatabaseInstance.prototype, "availableMaintenanceVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendType" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "backendType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionName" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "connectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentDiskSize" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "currentDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseInstalledVersion" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "databaseInstalledVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseVersion" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "databaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionConfiguration" }),
        __metadata("design:type", DiskEncryptionConfiguration)
    ], DatabaseInstance.prototype, "diskEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionStatus" }),
        __metadata("design:type", DiskEncryptionStatus)
    ], DatabaseInstance.prototype, "diskEncryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failoverReplica" }),
        __metadata("design:type", DatabaseInstanceFailoverReplica)
    ], DatabaseInstance.prototype, "failoverReplica", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gceZone" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "gceZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses", elemType: IpMapping }),
        __metadata("design:type", Array)
    ], DatabaseInstance.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Address" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "ipv6Address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceVersion" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "maintenanceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterInstanceName" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "masterInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDiskSize" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "maxDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremisesConfiguration" }),
        __metadata("design:type", OnPremisesConfiguration)
    ], DatabaseInstance.prototype, "onPremisesConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outOfDiskReport" }),
        __metadata("design:type", SqlOutOfDiskReport)
    ], DatabaseInstance.prototype, "outOfDiskReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicaConfiguration" }),
        __metadata("design:type", ReplicaConfiguration)
    ], DatabaseInstance.prototype, "replicaConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicaNames" }),
        __metadata("design:type", Array)
    ], DatabaseInstance.prototype, "replicaNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPassword" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "rootPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], DatabaseInstance.prototype, "satisfiesPzs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledMaintenance" }),
        __metadata("design:type", SqlScheduledMaintenance)
    ], DatabaseInstance.prototype, "scheduledMaintenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryGceZone" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "secondaryGceZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCaCert" }),
        __metadata("design:type", SslCert)
    ], DatabaseInstance.prototype, "serverCaCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmailAddress" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "serviceAccountEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", Settings)
    ], DatabaseInstance.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DatabaseInstance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionReason" }),
        __metadata("design:type", Array)
    ], DatabaseInstance.prototype, "suspensionReason", void 0);
    return DatabaseInstance;
}(SpeakeasyBase));
export { DatabaseInstance };
// DatabaseInstanceInput
/**
 * A Cloud SQL instance resource.
**/
var DatabaseInstanceInput = /** @class */ (function (_super) {
    __extends(DatabaseInstanceInput, _super);
    function DatabaseInstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableMaintenanceVersions" }),
        __metadata("design:type", Array)
    ], DatabaseInstanceInput.prototype, "availableMaintenanceVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendType" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "backendType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionName" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "connectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentDiskSize" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "currentDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseVersion" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "databaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionConfiguration" }),
        __metadata("design:type", DiskEncryptionConfiguration)
    ], DatabaseInstanceInput.prototype, "diskEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionStatus" }),
        __metadata("design:type", DiskEncryptionStatus)
    ], DatabaseInstanceInput.prototype, "diskEncryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failoverReplica" }),
        __metadata("design:type", DatabaseInstanceFailoverReplica)
    ], DatabaseInstanceInput.prototype, "failoverReplica", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gceZone" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "gceZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses", elemType: IpMapping }),
        __metadata("design:type", Array)
    ], DatabaseInstanceInput.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Address" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "ipv6Address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceVersion" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "maintenanceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterInstanceName" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "masterInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDiskSize" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "maxDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremisesConfiguration" }),
        __metadata("design:type", OnPremisesConfiguration)
    ], DatabaseInstanceInput.prototype, "onPremisesConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outOfDiskReport" }),
        __metadata("design:type", SqlOutOfDiskReport)
    ], DatabaseInstanceInput.prototype, "outOfDiskReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicaConfiguration" }),
        __metadata("design:type", ReplicaConfiguration)
    ], DatabaseInstanceInput.prototype, "replicaConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicaNames" }),
        __metadata("design:type", Array)
    ], DatabaseInstanceInput.prototype, "replicaNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPassword" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "rootPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], DatabaseInstanceInput.prototype, "satisfiesPzs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduledMaintenance" }),
        __metadata("design:type", SqlScheduledMaintenance)
    ], DatabaseInstanceInput.prototype, "scheduledMaintenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryGceZone" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "secondaryGceZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCaCert" }),
        __metadata("design:type", SslCert)
    ], DatabaseInstanceInput.prototype, "serverCaCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmailAddress" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "serviceAccountEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", Settings)
    ], DatabaseInstanceInput.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DatabaseInstanceInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionReason" }),
        __metadata("design:type", Array)
    ], DatabaseInstanceInput.prototype, "suspensionReason", void 0);
    return DatabaseInstanceInput;
}(SpeakeasyBase));
export { DatabaseInstanceInput };
