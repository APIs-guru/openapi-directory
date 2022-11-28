from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AchievementConfigurationDetail:
    r"""AchievementConfigurationDetail
    An achievement configuration detail.
    """
    
    description: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    point_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointValue') }})
    sort_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortRank') }})
    
