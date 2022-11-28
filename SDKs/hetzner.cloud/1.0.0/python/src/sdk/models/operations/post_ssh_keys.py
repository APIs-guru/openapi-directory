from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostSSHKeysRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class PostSSHKeys201ApplicationJSONSSHKey:
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclass
class PostSSHKeys201ApplicationJSON:
    ssh_key: PostSSHKeys201ApplicationJSONSSHKey = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclass
class PostSSHKeysRequest:
    request: Optional[PostSSHKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSSHKeysResponse:
    content_type: str = field()
    status_code: int = field()
    post_ssh_keys_201_application_json_object: Optional[PostSSHKeys201ApplicationJSON] = field(default=None)
    
