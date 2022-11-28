from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceDisabledReasonEnum(str, Enum):
    DISABLED_REASON_UNSPECIFIED = "DISABLED_REASON_UNSPECIFIED"
    KMS_KEY_ISSUE = "KMS_KEY_ISSUE"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPGRADING = "UPGRADING"
    RESTARTING = "RESTARTING"
    UPDATING = "UPDATING"
    AUTO_UPDATING = "AUTO_UPDATING"
    AUTO_UPGRADING = "AUTO_UPGRADING"
    DISABLED = "DISABLED"

class InstanceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    BASIC = "BASIC"
    ENTERPRISE = "ENTERPRISE"
    DEVELOPER = "DEVELOPER"


@dataclass_json
@dataclass
class Instance:
    r"""Instance
    Represents a Data Fusion instance.
    """
    
    accelerators: Optional[List[Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    api_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiEndpoint') }})
    available_version: Optional[List[Version]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersion') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    crypto_key_config: Optional[CryptoKeyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyConfig') }})
    dataproc_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocServiceAccount') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled_reason: Optional[List[InstanceDisabledReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledReason') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_rbac: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRbac') }})
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverLogging') }})
    enable_stackdriver_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverMonitoring') }})
    event_publish_config: Optional[EventPublishConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPublishConfig') }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsBucket') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    p4_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p4ServiceAccount') }})
    private_instance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateInstance') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEndpoint') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    tenant_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantProjectId') }})
    type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclass
class InstanceInput:
    r"""InstanceInput
    Represents a Data Fusion instance.
    """
    
    accelerators: Optional[List[Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    available_version: Optional[List[Version]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersion') }})
    crypto_key_config: Optional[CryptoKeyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyConfig') }})
    dataproc_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataprocServiceAccount') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_rbac: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRbac') }})
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverLogging') }})
    enable_stackdriver_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverMonitoring') }})
    event_publish_config: Optional[EventPublishConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPublishConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    private_instance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateInstance') }})
    type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
