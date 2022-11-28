from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatsResponse:
    r"""StatsResponse
    A third party stats resource.
    """
    
    avg_session_length_minutes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_session_length_minutes') }})
    churn_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('churn_probability') }})
    days_since_last_played: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_since_last_played') }})
    high_spender_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_spender_probability') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    num_purchases: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_purchases') }})
    num_sessions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_sessions') }})
    num_sessions_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_sessions_percentile') }})
    spend_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spend_percentile') }})
    spend_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spend_probability') }})
    total_spend_next_28_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_spend_next_28_days') }})
    
