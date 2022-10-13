from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trackingfloodlightactivityconfig


@dataclass_json
@dataclass
class ConversionCountingConfig:
    floodlight_activity_configs: Optional[List[trackingfloodlightactivityconfig.TrackingFloodlightActivityConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityConfigs' }})
    post_view_count_percentage_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postViewCountPercentageMillis' }})
    
