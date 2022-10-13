from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDocumentaiV1beta3ProcessorStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ENABLING = "ENABLING"
    DISABLING = "DISABLING"
    CREATING = "CREATING"
    FAILED = "FAILED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3Processor:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    default_processor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultProcessorVersion' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    process_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processEndpoint' }})
    state: Optional[GoogleCloudDocumentaiV1beta3ProcessorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
