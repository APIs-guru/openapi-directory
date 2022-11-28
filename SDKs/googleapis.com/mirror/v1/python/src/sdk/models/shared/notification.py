from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Notification:
    r"""Notification
    A notification delivered by the API.
    """
    
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    user_actions: Optional[List[UserAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActions') }})
    user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userToken') }})
    verify_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyToken') }})
    
