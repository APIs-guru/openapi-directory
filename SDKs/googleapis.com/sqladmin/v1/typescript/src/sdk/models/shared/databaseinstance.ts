import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { IpMapping } from "./ipmapping";
import { OnPremisesConfiguration } from "./onpremisesconfiguration";
import { SqlOutOfDiskReport } from "./sqloutofdiskreport";
import { ReplicaConfiguration } from "./replicaconfiguration";
import { SqlScheduledMaintenance } from "./sqlscheduledmaintenance";
import { SslCert } from "./sslcert";
import { Settings } from "./settings";

export enum DatabaseInstanceBackendTypeEnum {
    SqlBackendTypeUnspecified = "SQL_BACKEND_TYPE_UNSPECIFIED"
,    FirstGen = "FIRST_GEN"
,    SecondGen = "SECOND_GEN"
,    External = "EXTERNAL"
}

export enum DatabaseInstanceDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED"
,    Mysql51 = "MYSQL_5_1"
,    Mysql55 = "MYSQL_5_5"
,    Mysql56 = "MYSQL_5_6"
,    Mysql57 = "MYSQL_5_7"
,    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD"
,    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE"
,    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS"
,    Sqlserver2017Web = "SQLSERVER_2017_WEB"
,    Postgres96 = "POSTGRES_9_6"
,    Postgres10 = "POSTGRES_10"
,    Postgres11 = "POSTGRES_11"
,    Postgres12 = "POSTGRES_12"
,    Postgres13 = "POSTGRES_13"
,    Postgres14 = "POSTGRES_14"
,    Mysql80 = "MYSQL_8_0"
,    Mysql8018 = "MYSQL_8_0_18"
,    Mysql8026 = "MYSQL_8_0_26"
,    Mysql8027 = "MYSQL_8_0_27"
,    Mysql8028 = "MYSQL_8_0_28"
,    Mysql8029 = "MYSQL_8_0_29"
,    Mysql8030 = "MYSQL_8_0_30"
,    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD"
,    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE"
,    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS"
,    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}


// DatabaseInstanceFailoverReplica
/** 
 * The name and status of the failover replica.
**/
export class DatabaseInstanceFailoverReplica extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum DatabaseInstanceInstanceTypeEnum {
    SqlInstanceTypeUnspecified = "SQL_INSTANCE_TYPE_UNSPECIFIED"
,    CloudSqlInstance = "CLOUD_SQL_INSTANCE"
,    OnPremisesInstance = "ON_PREMISES_INSTANCE"
,    ReadReplicaInstance = "READ_REPLICA_INSTANCE"
}

export enum DatabaseInstanceStateEnum {
    SqlInstanceStateUnspecified = "SQL_INSTANCE_STATE_UNSPECIFIED"
,    Runnable = "RUNNABLE"
,    Suspended = "SUSPENDED"
,    PendingDelete = "PENDING_DELETE"
,    PendingCreate = "PENDING_CREATE"
,    Maintenance = "MAINTENANCE"
,    Failed = "FAILED"
,    OnlineMaintenance = "ONLINE_MAINTENANCE"
}

export enum DatabaseInstanceSuspensionReasonEnum {
    SqlSuspensionReasonUnspecified = "SQL_SUSPENSION_REASON_UNSPECIFIED"
,    BillingIssue = "BILLING_ISSUE"
,    LegalIssue = "LEGAL_ISSUE"
,    OperationalIssue = "OPERATIONAL_ISSUE"
,    KmsKeyIssue = "KMS_KEY_ISSUE"
}


// DatabaseInstance
/** 
 * A Cloud SQL instance resource.
**/
export class DatabaseInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableMaintenanceVersions" })
  availableMaintenanceVersions?: string[];

  @Metadata({ data: "json, name=backendType" })
  backendType?: DatabaseInstanceBackendTypeEnum;

  @Metadata({ data: "json, name=connectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=currentDiskSize" })
  currentDiskSize?: string;

  @Metadata({ data: "json, name=databaseInstalledVersion" })
  databaseInstalledVersion?: string;

  @Metadata({ data: "json, name=databaseVersion" })
  databaseVersion?: DatabaseInstanceDatabaseVersionEnum;

  @Metadata({ data: "json, name=diskEncryptionConfiguration" })
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;

  @Metadata({ data: "json, name=diskEncryptionStatus" })
  diskEncryptionStatus?: DiskEncryptionStatus;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=failoverReplica" })
  failoverReplica?: DatabaseInstanceFailoverReplica;

  @Metadata({ data: "json, name=gceZone" })
  gceZone?: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: DatabaseInstanceInstanceTypeEnum;

  @Metadata({ data: "json, name=ipAddresses", elemType: shared.IpMapping })
  ipAddresses?: IpMapping[];

  @Metadata({ data: "json, name=ipv6Address" })
  ipv6Address?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maintenanceVersion" })
  maintenanceVersion?: string;

  @Metadata({ data: "json, name=masterInstanceName" })
  masterInstanceName?: string;

  @Metadata({ data: "json, name=maxDiskSize" })
  maxDiskSize?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onPremisesConfiguration" })
  onPremisesConfiguration?: OnPremisesConfiguration;

  @Metadata({ data: "json, name=outOfDiskReport" })
  outOfDiskReport?: SqlOutOfDiskReport;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=replicaConfiguration" })
  replicaConfiguration?: ReplicaConfiguration;

  @Metadata({ data: "json, name=replicaNames" })
  replicaNames?: string[];

  @Metadata({ data: "json, name=rootPassword" })
  rootPassword?: string;

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=scheduledMaintenance" })
  scheduledMaintenance?: SqlScheduledMaintenance;

  @Metadata({ data: "json, name=secondaryGceZone" })
  secondaryGceZone?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=serverCaCert" })
  serverCaCert?: SslCert;

  @Metadata({ data: "json, name=serviceAccountEmailAddress" })
  serviceAccountEmailAddress?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: Settings;

  @Metadata({ data: "json, name=state" })
  state?: DatabaseInstanceStateEnum;

  @Metadata({ data: "json, name=suspensionReason" })
  suspensionReason?: DatabaseInstanceSuspensionReasonEnum[];
}
