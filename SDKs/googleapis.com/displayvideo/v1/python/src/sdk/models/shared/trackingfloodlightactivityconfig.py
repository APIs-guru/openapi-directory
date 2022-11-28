from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrackingFloodlightActivityConfig:
    r"""TrackingFloodlightActivityConfig
    Settings that control the behavior of a single Floodlight activity config.
    """
    
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityId') }})
    post_click_lookback_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postClickLookbackWindowDays') }})
    post_view_lookback_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postViewLookbackWindowDays') }})
    
