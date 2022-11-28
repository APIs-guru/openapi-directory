from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LdapAuthModuleConfig:
    r"""LdapAuthModuleConfig
    Settings to authenticate users using a generic OAuth2 provider
    """
    
    admin_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminPassword') }})
    admin_username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminUsername') }})
    desc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    email_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailField') }})
    group_filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupFilter') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameField') }})
    search_base: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchBase') }})
    search_filter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchFilter') }})
    server_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverUrl') }})
    session_max_age: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_base: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userBase') }})
    otoroshi_data_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otoroshiDataField') }})
    
