from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import diskencryptionconfiguration
from . import diskencryptionstatus
from . import ipmapping
from . import onpremisesconfiguration
from . import sqloutofdiskreport
from . import replicaconfiguration
from . import sqlscheduledmaintenance
from . import sslcert
from . import settings

class DatabaseInstanceBackendTypeEnum(str, Enum):
    SQL_BACKEND_TYPE_UNSPECIFIED = "SQL_BACKEND_TYPE_UNSPECIFIED"
    FIRST_GEN = "FIRST_GEN"
    SECOND_GEN = "SECOND_GEN"
    EXTERNAL = "EXTERNAL"

class DatabaseInstanceDatabaseVersionEnum(str, Enum):
    SQL_DATABASE_VERSION_UNSPECIFIED = "SQL_DATABASE_VERSION_UNSPECIFIED"
    MYSQL_5_1 = "MYSQL_5_1"
    MYSQL_5_5 = "MYSQL_5_5"
    MYSQL_5_6 = "MYSQL_5_6"
    MYSQL_5_7 = "MYSQL_5_7"
    SQLSERVER_2017_STANDARD = "SQLSERVER_2017_STANDARD"
    SQLSERVER_2017_ENTERPRISE = "SQLSERVER_2017_ENTERPRISE"
    SQLSERVER_2017_EXPRESS = "SQLSERVER_2017_EXPRESS"
    SQLSERVER_2017_WEB = "SQLSERVER_2017_WEB"
    POSTGRES_9_6 = "POSTGRES_9_6"
    POSTGRES_10 = "POSTGRES_10"
    POSTGRES_11 = "POSTGRES_11"
    POSTGRES_12 = "POSTGRES_12"
    POSTGRES_13 = "POSTGRES_13"
    POSTGRES_14 = "POSTGRES_14"
    MYSQL_8_0 = "MYSQL_8_0"
    MYSQL_8_0_18 = "MYSQL_8_0_18"
    MYSQL_8_0_26 = "MYSQL_8_0_26"
    MYSQL_8_0_27 = "MYSQL_8_0_27"
    MYSQL_8_0_28 = "MYSQL_8_0_28"
    MYSQL_8_0_29 = "MYSQL_8_0_29"
    MYSQL_8_0_30 = "MYSQL_8_0_30"
    SQLSERVER_2019_STANDARD = "SQLSERVER_2019_STANDARD"
    SQLSERVER_2019_ENTERPRISE = "SQLSERVER_2019_ENTERPRISE"
    SQLSERVER_2019_EXPRESS = "SQLSERVER_2019_EXPRESS"
    SQLSERVER_2019_WEB = "SQLSERVER_2019_WEB"


@dataclass_json
@dataclass
class DatabaseInstanceFailoverReplica:
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class DatabaseInstanceInstanceTypeEnum(str, Enum):
    SQL_INSTANCE_TYPE_UNSPECIFIED = "SQL_INSTANCE_TYPE_UNSPECIFIED"
    CLOUD_SQL_INSTANCE = "CLOUD_SQL_INSTANCE"
    ON_PREMISES_INSTANCE = "ON_PREMISES_INSTANCE"
    READ_REPLICA_INSTANCE = "READ_REPLICA_INSTANCE"

class DatabaseInstanceStateEnum(str, Enum):
    SQL_INSTANCE_STATE_UNSPECIFIED = "SQL_INSTANCE_STATE_UNSPECIFIED"
    RUNNABLE = "RUNNABLE"
    SUSPENDED = "SUSPENDED"
    PENDING_DELETE = "PENDING_DELETE"
    PENDING_CREATE = "PENDING_CREATE"
    MAINTENANCE = "MAINTENANCE"
    FAILED = "FAILED"
    ONLINE_MAINTENANCE = "ONLINE_MAINTENANCE"

class DatabaseInstanceSuspensionReasonEnum(str, Enum):
    SQL_SUSPENSION_REASON_UNSPECIFIED = "SQL_SUSPENSION_REASON_UNSPECIFIED"
    BILLING_ISSUE = "BILLING_ISSUE"
    LEGAL_ISSUE = "LEGAL_ISSUE"
    OPERATIONAL_ISSUE = "OPERATIONAL_ISSUE"
    KMS_KEY_ISSUE = "KMS_KEY_ISSUE"


@dataclass_json
@dataclass
class DatabaseInstance:
    available_maintenance_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableMaintenanceVersions' }})
    backend_type: Optional[DatabaseInstanceBackendTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendType' }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    current_disk_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentDiskSize' }})
    database_installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseInstalledVersion' }})
    database_version: Optional[DatabaseInstanceDatabaseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseVersion' }})
    disk_encryption_configuration: Optional[diskencryptionconfiguration.DiskEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskEncryptionConfiguration' }})
    disk_encryption_status: Optional[diskencryptionstatus.DiskEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskEncryptionStatus' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    failover_replica: Optional[DatabaseInstanceFailoverReplica] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverReplica' }})
    gce_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gceZone' }})
    instance_type: Optional[DatabaseInstanceInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    ip_addresses: Optional[List[ipmapping.IPMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddresses' }})
    ipv6_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Address' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    maintenance_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceVersion' }})
    master_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterInstanceName' }})
    max_disk_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDiskSize' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_premises_configuration: Optional[onpremisesconfiguration.OnPremisesConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onPremisesConfiguration' }})
    out_of_disk_report: Optional[sqloutofdiskreport.SQLOutOfDiskReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outOfDiskReport' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    replica_configuration: Optional[replicaconfiguration.ReplicaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicaConfiguration' }})
    replica_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicaNames' }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootPassword' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    scheduled_maintenance: Optional[sqlscheduledmaintenance.SQLScheduledMaintenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledMaintenance' }})
    secondary_gce_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryGceZone' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    server_ca_cert: Optional[sslcert.SslCert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCaCert' }})
    service_account_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmailAddress' }})
    settings: Optional[settings.Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    state: Optional[DatabaseInstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    suspension_reason: Optional[List[DatabaseInstanceSuspensionReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionReason' }})
    
