from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrackingFloodlightActivityConfig:
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityId' }})
    post_click_lookback_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postClickLookbackWindowDays' }})
    post_view_lookback_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postViewLookbackWindowDays' }})
    
