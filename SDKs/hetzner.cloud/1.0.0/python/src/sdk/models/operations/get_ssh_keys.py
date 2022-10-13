from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetSSHKeysSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"


@dataclass
class GetSSHKeysQueryParams:
    fingerprint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fingerprint', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetSSHKeysSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSSHKeysRequest:
    query_params: GetSSHKeysQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSSHKeys200ApplicationJSONMetaPagination:
    last_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_page' }})
    next_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page' }})
    page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    previous_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page' }})
    total_entries: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_entries' }})
    

@dataclass_json
@dataclass
class GetSSHKeys200ApplicationJSONMeta:
    pagination: GetSSHKeys200ApplicationJSONMetaPagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass_json
@dataclass
class GetSSHKeys200ApplicationJSONSSHKeys:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    

@dataclass_json
@dataclass
class GetSSHKeys200ApplicationJSON:
    meta: Optional[GetSSHKeys200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    ssh_keys: List[GetSSHKeys200ApplicationJSONSSHKeys] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    

@dataclass
class GetSSHKeysResponse:
    content_type: str = field(default=None)
    get_ssh_keys_200_application_json_object: Optional[GetSSHKeys200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
