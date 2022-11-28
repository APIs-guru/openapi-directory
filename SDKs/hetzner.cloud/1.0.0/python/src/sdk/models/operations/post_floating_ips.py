from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostFloatingIpsCreateFloatingIPRequestTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PostFloatingIpsCreateFloatingIPRequest:
    type: PostFloatingIpsCreateFloatingIPRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    home_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONActionError:
    r"""PostFloatingIps201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFloatingIps201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostFloatingIps201ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[PostFloatingIps201ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostFloatingIps201ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPHomeLocation:
    r"""PostFloatingIps201ApplicationJSONFloatingIPHomeLocation
    Location the Floating IP was created in. Routing is optimized for this Location.
    """
    
    city: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIPProtection:
    r"""PostFloatingIps201ApplicationJSONFloatingIPProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PostFloatingIps201ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSONFloatingIP:
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: List[PostFloatingIps201ApplicationJSONFloatingIPDNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: PostFloatingIps201ApplicationJSONFloatingIPHomeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PostFloatingIps201ApplicationJSONFloatingIPProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: PostFloatingIps201ApplicationJSONFloatingIPTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostFloatingIps201ApplicationJSON:
    floating_ip: PostFloatingIps201ApplicationJSONFloatingIP = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    action: Optional[PostFloatingIps201ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class PostFloatingIpsRequest:
    request: Optional[PostFloatingIpsCreateFloatingIPRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFloatingIpsResponse:
    content_type: str = field()
    status_code: int = field()
    post_floating_ips_201_application_json_object: Optional[PostFloatingIps201ApplicationJSON] = field(default=None)
    
