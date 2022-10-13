from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSSHKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSSHKeysIDRequest:
    path_params: GetSSHKeysIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSSHKeysID200ApplicationJSONSSHKey:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass_json
@dataclass
class GetSSHKeysID200ApplicationJSON:
    ssh_key: GetSSHKeysID200ApplicationJSONSSHKey = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key' }})
    

@dataclass
class GetSSHKeysIDResponse:
    content_type: str = field(default=None)
    get_ssh_keys_id_200_application_json_object: Optional[GetSSHKeysID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
