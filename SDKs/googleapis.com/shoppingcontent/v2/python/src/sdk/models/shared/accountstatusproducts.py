from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountStatusProducts:
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    item_level_issues: Optional[List[AccountStatusItemLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemLevelIssues') }})
    statistics: Optional[AccountStatusStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
