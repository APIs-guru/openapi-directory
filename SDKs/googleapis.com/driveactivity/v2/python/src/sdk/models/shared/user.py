from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class User:
    r"""User
    Information about an end user.
    """
    
    deleted_user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedUser') }})
    known_user: Optional[KnownUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownUser') }})
    unknown_user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownUser') }})
    
