from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutFloatingIpsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFloatingIpsIDUpdateFloatingIPRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation:
    r"""PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation
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
class PutFloatingIpsID200ApplicationJSONFloatingIPProtection:
    r"""PutFloatingIpsID200ApplicationJSONFloatingIPProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSONFloatingIP:
    blocked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: List[PutFloatingIpsID200ApplicationJSONFloatingIPDNSPtr] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: PutFloatingIpsID200ApplicationJSONFloatingIPHomeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PutFloatingIpsID200ApplicationJSONFloatingIPProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: PutFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutFloatingIpsID200ApplicationJSON:
    floating_ip: PutFloatingIpsID200ApplicationJSONFloatingIP = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    

@dataclass
class PutFloatingIpsIDRequest:
    path_params: PutFloatingIpsIDPathParams = field()
    request: Optional[PutFloatingIpsIDUpdateFloatingIPRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFloatingIpsIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_floating_ips_id_200_application_json_object: Optional[PutFloatingIpsID200ApplicationJSON] = field(default=None)
    
