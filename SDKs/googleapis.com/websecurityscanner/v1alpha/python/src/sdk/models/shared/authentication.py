from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Authentication:
    r"""Authentication
    Scan authentication configuration.
    """
    
    custom_account: Optional[CustomAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAccount') }})
    google_account: Optional[GoogleAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAccount') }})
    
