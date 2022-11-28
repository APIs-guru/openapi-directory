from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaderboardConfigurationDetail:
    r"""LeaderboardConfigurationDetail
    A leaderboard configuration detail.
    """
    
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    score_format: Optional[GamesNumberFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreFormat') }})
    sort_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortRank') }})
    
