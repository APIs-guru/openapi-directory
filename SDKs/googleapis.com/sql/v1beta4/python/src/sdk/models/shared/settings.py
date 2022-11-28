from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Settings
    Database instance settings.
    """
    
    activation_policy: Optional[SettingsActivationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationPolicy') }})
    active_directory_config: Optional[SQLActiveDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryConfig') }})
    authorized_gae_applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedGaeApplications') }})
    availability_type: Optional[SettingsAvailabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityType') }})
    backup_configuration: Optional[BackupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupConfiguration') }})
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collation') }})
    connector_enforcement: Optional[SettingsConnectorEnforcementEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorEnforcement') }})
    crash_safe_replication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crashSafeReplicationEnabled') }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[SettingsDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    database_flags: Optional[List[DatabaseFlags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    database_replication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseReplicationEnabled') }})
    deletion_protection_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionProtectionEnabled') }})
    deny_maintenance_periods: Optional[List[DenyMaintenancePeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyMaintenancePeriods') }})
    insights_config: Optional[InsightsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insightsConfig') }})
    ip_configuration: Optional[IPConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfiguration') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location_preference: Optional[LocationPreference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationPreference') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    password_validation_policy: Optional[PasswordValidationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordValidationPolicy') }})
    pricing_plan: Optional[SettingsPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingPlan') }})
    replication_type: Optional[SettingsReplicationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationType') }})
    settings_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingsVersion') }})
    sql_server_audit_config: Optional[SQLServerAuditConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlServerAuditConfig') }})
    storage_auto_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResize') }})
    storage_auto_resize_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResizeLimit') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
