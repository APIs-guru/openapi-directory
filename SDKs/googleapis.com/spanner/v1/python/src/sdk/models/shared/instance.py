from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import freeinstancemetadata

class InstanceInstanceTypeEnum(str, Enum):
    INSTANCE_TYPE_UNSPECIFIED = "INSTANCE_TYPE_UNSPECIFIED"
    PROVISIONED = "PROVISIONED"
    FREE_INSTANCE = "FREE_INSTANCE"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"


@dataclass_json
@dataclass
class Instance:
    config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    endpoint_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointUris' }})
    free_instance_metadata: Optional[freeinstancemetadata.FreeInstanceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeInstanceMetadata' }})
    instance_type: Optional[InstanceInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    processing_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingUnits' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
