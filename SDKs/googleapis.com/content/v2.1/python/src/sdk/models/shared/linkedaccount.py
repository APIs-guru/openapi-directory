from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkedAccount:
    linked_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAccountId') }})
    services: Optional[List[LinkService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
