from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1ZoneStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"

class GoogleCloudDataplexV1ZoneTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    RAW = "RAW"
    CURATED = "CURATED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneInput:
    r"""GoogleCloudDataplexV1ZoneInput
    A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
    """
    
    asset_status: Optional[GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovery_spec: Optional[GoogleCloudDataplexV1ZoneDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverySpec') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    resource_spec: Optional[GoogleCloudDataplexV1ZoneResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpec') }})
    type: Optional[GoogleCloudDataplexV1ZoneTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1Zone:
    r"""GoogleCloudDataplexV1Zone
    A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
    """
    
    asset_status: Optional[GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovery_spec: Optional[GoogleCloudDataplexV1ZoneDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverySpec') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_spec: Optional[GoogleCloudDataplexV1ZoneResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpec') }})
    state: Optional[GoogleCloudDataplexV1ZoneStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudDataplexV1ZoneTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
