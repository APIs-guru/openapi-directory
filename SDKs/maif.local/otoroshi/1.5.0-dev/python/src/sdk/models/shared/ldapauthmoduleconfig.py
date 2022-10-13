from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LdapAuthModuleConfig:
    admin_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminPassword' }})
    admin_username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminUsername' }})
    desc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    email_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailField' }})
    group_filter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupFilter' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    name_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameField' }})
    otoroshi_data_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otoroshiDataField' }})
    search_base: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchBase' }})
    search_filter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchFilter' }})
    server_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverUrl' }})
    session_max_age: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionMaxAge' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_base: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userBase' }})
    
