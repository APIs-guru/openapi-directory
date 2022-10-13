from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accelerator
from . import version
from . import cryptokeyconfig
from . import eventpublishconfig
from . import networkconfig

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
    accelerators: Optional[List[accelerator.Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelerators' }})
    api_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiEndpoint' }})
    available_version: Optional[List[version.Version]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersion' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    crypto_key_config: Optional[cryptokeyconfig.CryptoKeyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeyConfig' }})
    dataproc_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataprocServiceAccount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled_reason: Optional[List[InstanceDisabledReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledReason' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_rbac: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableRbac' }})
    enable_stackdriver_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverLogging' }})
    enable_stackdriver_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverMonitoring' }})
    event_publish_config: Optional[eventpublishconfig.EventPublishConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventPublishConfig' }})
    gcs_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsBucket' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    p4_service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'p4ServiceAccount' }})
    private_instance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateInstance' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceEndpoint' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    tenant_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectId' }})
    type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
