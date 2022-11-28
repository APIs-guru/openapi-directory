from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1AssetStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Asset:
    r"""GoogleCloudDataplexV1Asset
    An asset represents a cloud resource that is being managed within a lake as a member of a zone.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovery_spec: Optional[GoogleCloudDataplexV1AssetDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverySpec') }})
    discovery_status: Optional[GoogleCloudDataplexV1AssetDiscoveryStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryStatus') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_spec: Optional[GoogleCloudDataplexV1AssetResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpec') }})
    resource_status: Optional[GoogleCloudDataplexV1AssetResourceStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceStatus') }})
    security_status: Optional[GoogleCloudDataplexV1AssetSecurityStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityStatus') }})
    state: Optional[GoogleCloudDataplexV1AssetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetInput:
    r"""GoogleCloudDataplexV1AssetInput
    An asset represents a cloud resource that is being managed within a lake as a member of a zone.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovery_spec: Optional[GoogleCloudDataplexV1AssetDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverySpec') }})
    discovery_status: Optional[GoogleCloudDataplexV1AssetDiscoveryStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryStatus') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    resource_spec: Optional[GoogleCloudDataplexV1AssetResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpec') }})
    resource_status: Optional[GoogleCloudDataplexV1AssetResourceStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceStatus') }})
    security_status: Optional[GoogleCloudDataplexV1AssetSecurityStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityStatus') }})
    
