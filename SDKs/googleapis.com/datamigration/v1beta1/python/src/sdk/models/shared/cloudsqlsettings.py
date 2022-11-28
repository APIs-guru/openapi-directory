from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CloudSQLSettingsActivationPolicyEnum(str, Enum):
    SQL_ACTIVATION_POLICY_UNSPECIFIED = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

class CloudSQLSettingsDataDiskTypeEnum(str, Enum):
    SQL_DATA_DISK_TYPE_UNSPECIFIED = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
    PD_SSD = "PD_SSD"
    PD_HDD = "PD_HDD"

class CloudSQLSettingsDatabaseVersionEnum(str, Enum):
    SQL_DATABASE_VERSION_UNSPECIFIED = "SQL_DATABASE_VERSION_UNSPECIFIED"
    MYSQL_5_6 = "MYSQL_5_6"
    MYSQL_5_7 = "MYSQL_5_7"
    MYSQL_8_0 = "MYSQL_8_0"


@dataclass_json
@dataclass
class CloudSQLSettingsInput:
    r"""CloudSQLSettingsInput
    Settings for creating a Cloud SQL database instance.
    """
    
    activation_policy: Optional[CloudSQLSettingsActivationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationPolicy') }})
    auto_storage_increase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoStorageIncrease') }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[CloudSQLSettingsDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    database_flags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    database_version: Optional[CloudSQLSettingsDatabaseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseVersion') }})
    ip_config: Optional[SQLIPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfig') }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPassword') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    storage_auto_resize_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResizeLimit') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclass
class CloudSQLSettings:
    r"""CloudSQLSettings
    Settings for creating a Cloud SQL database instance.
    """
    
    activation_policy: Optional[CloudSQLSettingsActivationPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationPolicy') }})
    auto_storage_increase: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoStorageIncrease') }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[CloudSQLSettingsDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    database_flags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    database_version: Optional[CloudSQLSettingsDatabaseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseVersion') }})
    ip_config: Optional[SQLIPConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfig') }})
    root_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPassword') }})
    root_password_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPasswordSet') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    storage_auto_resize_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageAutoResizeLimit') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
