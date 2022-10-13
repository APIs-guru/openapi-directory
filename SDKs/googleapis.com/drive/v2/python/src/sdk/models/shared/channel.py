from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Channel:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    expiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    payload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
