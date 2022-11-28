from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Instance
    An isolated set of Cloud Spanner resources on which databases can be hosted.
    """
    
    config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    endpoint_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUris') }})
    free_instance_metadata: Optional[FreeInstanceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeInstanceMetadata') }})
    instance_type: Optional[InstanceInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    processing_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingUnits') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class InstanceInput:
    r"""InstanceInput
    An isolated set of Cloud Spanner resources on which databases can be hosted.
    """
    
    config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    endpoint_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUris') }})
    free_instance_metadata: Optional[FreeInstanceMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeInstanceMetadata') }})
    instance_type: Optional[InstanceInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    processing_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingUnits') }})
    
