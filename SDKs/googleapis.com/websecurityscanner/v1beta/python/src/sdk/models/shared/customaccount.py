from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomAccount:
    r"""CustomAccount
    Describes authentication configuration that uses a custom account.
    """
    
    login_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginUrl') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
