from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetSSHKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetSSHKeysID200ApplicationJSONSSHKey:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclass
class GetSSHKeysID200ApplicationJSON:
    ssh_key: GetSSHKeysID200ApplicationJSONSSHKey = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclass
class GetSSHKeysIDRequest:
    path_params: GetSSHKeysIDPathParams = field()
    

@dataclass
class GetSSHKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_ssh_keys_id_200_application_json_object: Optional[GetSSHKeysID200ApplicationJSON] = field(default=None)
    
