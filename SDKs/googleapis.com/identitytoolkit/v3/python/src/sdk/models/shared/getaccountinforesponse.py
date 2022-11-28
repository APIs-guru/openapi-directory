from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccountInfoResponse:
    r"""GetAccountInfoResponse
    Response of getting account information.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    users: Optional[List[UserInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
