from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sqlactivedirectoryconfig
from . import backupconfiguration
from . import databaseflags
from . import denymaintenanceperiod
from . import insightsconfig
from . import ipconfiguration
from . import locationpreference
from . import maintenancewindow
from . import passwordvalidationpolicy
from . import sqlserverauditconfig

class SettingsActivationPolicyEnum(str, Enum):
    SQL_ACTIVATION_POLICY_UNSPECIFIED = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"
    ON_DEMAND = "ON_DEMAND"

class SettingsAvailabilityTypeEnum(str, Enum):
    SQL_AVAILABILITY_TYPE_UNSPECIFIED = "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
    ZONAL = "ZONAL"
    REGIONAL = "REGIONAL"

class SettingsConnectorEnforcementEnum(str, Enum):
    CONNECTOR_ENFORCEMENT_UNSPECIFIED = "CONNECTOR_ENFORCEMENT_UNSPECIFIED"
    NOT_REQUIRED = "NOT_REQUIRED"
    REQUIRED = "REQUIRED"

class SettingsDataDiskTypeEnum(str, Enum):
    SQL_DATA_DISK_TYPE_UNSPECIFIED = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
    PD_SSD = "PD_SSD"
    PD_HDD = "PD_HDD"
    OBSOLETE_LOCAL_SSD = "OBSOLETE_LOCAL_SSD"

class SettingsPricingPlanEnum(str, Enum):
    SQL_PRICING_PLAN_UNSPECIFIED = "SQL_PRICING_PLAN_UNSPECIFIED"
    PACKAGE = "PACKAGE"
    PER_USE = "PER_USE"

class SettingsReplicationTypeEnum(str, Enum):
    SQL_REPLICATION_TYPE_UNSPECIFIED = "SQL_REPLICATION_TYPE_UNSPECIFIED"
    SYNCHRONOUS = "SYNCHRONOUS"
    ASYNCHRONOUS = "ASYNCHRONOUS"


@dataclass_json
@dataclass
class Settings:
    activation_policy: Optional[SettingsActivationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationPolicy' }})
    active_directory_config: Optional[sqlactivedirectoryconfig.SQLActiveDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectoryConfig' }})
    authorized_gae_applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedGaeApplications' }})
    availability_type: Optional[SettingsAvailabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityType' }})
    backup_configuration: Optional[backupconfiguration.BackupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupConfiguration' }})
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collation' }})
    connector_enforcement: Optional[SettingsConnectorEnforcementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorEnforcement' }})
    crash_safe_replication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crashSafeReplicationEnabled' }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDiskSizeGb' }})
    data_disk_type: Optional[SettingsDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDiskType' }})
    database_flags: Optional[List[databaseflags.DatabaseFlags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseFlags' }})
    database_replication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseReplicationEnabled' }})
    deletion_protection_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletionProtectionEnabled' }})
    deny_maintenance_periods: Optional[List[denymaintenanceperiod.DenyMaintenancePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denyMaintenancePeriods' }})
    insights_config: Optional[insightsconfig.InsightsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insightsConfig' }})
    ip_configuration: Optional[ipconfiguration.IPConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipConfiguration' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location_preference: Optional[locationpreference.LocationPreference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationPreference' }})
    maintenance_window: Optional[maintenancewindow.MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceWindow' }})
    password_validation_policy: Optional[passwordvalidationpolicy.PasswordValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordValidationPolicy' }})
    pricing_plan: Optional[SettingsPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingPlan' }})
    replication_type: Optional[SettingsReplicationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationType' }})
    settings_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingsVersion' }})
    sql_server_audit_config: Optional[sqlserverauditconfig.SQLServerAuditConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlServerAuditConfig' }})
    storage_auto_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageAutoResize' }})
    storage_auto_resize_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageAutoResizeLimit' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    
