from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostSSHKeysRequestBody:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass
class PostSSHKeysRequest:
    request: Optional[PostSSHKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostSSHKeys201ApplicationJSONSSHKey:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass_json
@dataclass
class PostSSHKeys201ApplicationJSON:
    ssh_key: PostSSHKeys201ApplicationJSONSSHKey = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key' }})
    

@dataclass
class PostSSHKeysResponse:
    content_type: str = field(default=None)
    post_ssh_keys_201_application_json_object: Optional[PostSSHKeys201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
