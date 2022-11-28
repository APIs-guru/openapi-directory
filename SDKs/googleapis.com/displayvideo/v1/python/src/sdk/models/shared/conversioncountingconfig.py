from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversionCountingConfig:
    r"""ConversionCountingConfig
    Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
    """
    
    floodlight_activity_configs: Optional[List[TrackingFloodlightActivityConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityConfigs') }})
    post_view_count_percentage_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postViewCountPercentageMillis') }})
    
