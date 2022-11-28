import { SpeakeasyBase } from "../../../internal/utils";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { IpMapping } from "./ipmapping";
import { OnPremisesConfiguration } from "./onpremisesconfiguration";
import { SqlOutOfDiskReport } from "./sqloutofdiskreport";
import { ReplicaConfiguration } from "./replicaconfiguration";
import { SqlScheduledMaintenance } from "./sqlscheduledmaintenance";
import { SslCert } from "./sslcert";
import { Settings } from "./settings";
export declare enum DatabaseInstanceBackendTypeEnum {
    SqlBackendTypeUnspecified = "SQL_BACKEND_TYPE_UNSPECIFIED",
    FirstGen = "FIRST_GEN",
    SecondGen = "SECOND_GEN",
    External = "EXTERNAL"
}
export declare enum DatabaseInstanceDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql51 = "MYSQL_5_1",
    Mysql55 = "MYSQL_5_5",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD",
    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE",
    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS",
    Sqlserver2017Web = "SQLSERVER_2017_WEB",
    Postgres96 = "POSTGRES_9_6",
    Postgres10 = "POSTGRES_10",
    Postgres11 = "POSTGRES_11",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14",
    Mysql80 = "MYSQL_8_0",
    Mysql8018 = "MYSQL_8_0_18",
    Mysql8026 = "MYSQL_8_0_26",
    Mysql8027 = "MYSQL_8_0_27",
    Mysql8028 = "MYSQL_8_0_28",
    Mysql8029 = "MYSQL_8_0_29",
    Mysql8030 = "MYSQL_8_0_30",
    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD",
    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE",
    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS",
    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}
/**
 * The name and status of the failover replica.
**/
export declare class DatabaseInstanceFailoverReplica extends SpeakeasyBase {
    available?: boolean;
    name?: string;
}
export declare enum DatabaseInstanceInstanceTypeEnum {
    SqlInstanceTypeUnspecified = "SQL_INSTANCE_TYPE_UNSPECIFIED",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    OnPremisesInstance = "ON_PREMISES_INSTANCE",
    ReadReplicaInstance = "READ_REPLICA_INSTANCE"
}
export declare enum DatabaseInstanceStateEnum {
    SqlInstanceStateUnspecified = "SQL_INSTANCE_STATE_UNSPECIFIED",
    Runnable = "RUNNABLE",
    Suspended = "SUSPENDED",
    PendingDelete = "PENDING_DELETE",
    PendingCreate = "PENDING_CREATE",
    Maintenance = "MAINTENANCE",
    Failed = "FAILED",
    OnlineMaintenance = "ONLINE_MAINTENANCE"
}
export declare enum DatabaseInstanceSuspensionReasonEnum {
    SqlSuspensionReasonUnspecified = "SQL_SUSPENSION_REASON_UNSPECIFIED",
    BillingIssue = "BILLING_ISSUE",
    LegalIssue = "LEGAL_ISSUE",
    OperationalIssue = "OPERATIONAL_ISSUE",
    KmsKeyIssue = "KMS_KEY_ISSUE"
}
/**
 * A Cloud SQL instance resource.
**/
export declare class DatabaseInstance extends SpeakeasyBase {
    availableMaintenanceVersions?: string[];
    backendType?: DatabaseInstanceBackendTypeEnum;
    connectionName?: string;
    createTime?: string;
    currentDiskSize?: string;
    databaseInstalledVersion?: string;
    databaseVersion?: DatabaseInstanceDatabaseVersionEnum;
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    diskEncryptionStatus?: DiskEncryptionStatus;
    etag?: string;
    failoverReplica?: DatabaseInstanceFailoverReplica;
    gceZone?: string;
    instanceType?: DatabaseInstanceInstanceTypeEnum;
    ipAddresses?: IpMapping[];
    ipv6Address?: string;
    kind?: string;
    maintenanceVersion?: string;
    masterInstanceName?: string;
    maxDiskSize?: string;
    name?: string;
    onPremisesConfiguration?: OnPremisesConfiguration;
    outOfDiskReport?: SqlOutOfDiskReport;
    project?: string;
    region?: string;
    replicaConfiguration?: ReplicaConfiguration;
    replicaNames?: string[];
    rootPassword?: string;
    satisfiesPzs?: boolean;
    scheduledMaintenance?: SqlScheduledMaintenance;
    secondaryGceZone?: string;
    selfLink?: string;
    serverCaCert?: SslCert;
    serviceAccountEmailAddress?: string;
    settings?: Settings;
    state?: DatabaseInstanceStateEnum;
    suspensionReason?: DatabaseInstanceSuspensionReasonEnum[];
}
/**
 * A Cloud SQL instance resource.
**/
export declare class DatabaseInstanceInput extends SpeakeasyBase {
    availableMaintenanceVersions?: string[];
    backendType?: DatabaseInstanceBackendTypeEnum;
    connectionName?: string;
    currentDiskSize?: string;
    databaseVersion?: DatabaseInstanceDatabaseVersionEnum;
    diskEncryptionConfiguration?: DiskEncryptionConfiguration;
    diskEncryptionStatus?: DiskEncryptionStatus;
    etag?: string;
    failoverReplica?: DatabaseInstanceFailoverReplica;
    gceZone?: string;
    instanceType?: DatabaseInstanceInstanceTypeEnum;
    ipAddresses?: IpMapping[];
    ipv6Address?: string;
    kind?: string;
    maintenanceVersion?: string;
    masterInstanceName?: string;
    maxDiskSize?: string;
    name?: string;
    onPremisesConfiguration?: OnPremisesConfiguration;
    outOfDiskReport?: SqlOutOfDiskReport;
    project?: string;
    region?: string;
    replicaConfiguration?: ReplicaConfiguration;
    replicaNames?: string[];
    rootPassword?: string;
    satisfiesPzs?: boolean;
    scheduledMaintenance?: SqlScheduledMaintenance;
    secondaryGceZone?: string;
    selfLink?: string;
    serverCaCert?: SslCert;
    serviceAccountEmailAddress?: string;
    settings?: Settings;
    state?: DatabaseInstanceStateEnum;
    suspensionReason?: DatabaseInstanceSuspensionReasonEnum[];
}
