from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountQuota:
    r"""AccountQuota
    Represents a set of quotas associated with an account
    """
    
    per_project: Optional[List[PerProjectQuota]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerProject') }})
    predictions: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    projects: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projects') }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
