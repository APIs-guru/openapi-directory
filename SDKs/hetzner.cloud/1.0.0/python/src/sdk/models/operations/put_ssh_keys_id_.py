from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutSSHKeysIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutSSHKeysIDRequestBody:
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutSSHKeysIDRequest:
    path_params: PutSSHKeysIDPathParams = field(default=None)
    request: Optional[PutSSHKeysIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutSSHKeysID200ApplicationJSONSSHKey:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass_json
@dataclass
class PutSSHKeysID200ApplicationJSON:
    ssh_key: PutSSHKeysID200ApplicationJSONSSHKey = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key' }})
    

@dataclass
class PutSSHKeysIDResponse:
    content_type: str = field(default=None)
    put_ssh_keys_id_200_application_json_object: Optional[PutSSHKeysID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
