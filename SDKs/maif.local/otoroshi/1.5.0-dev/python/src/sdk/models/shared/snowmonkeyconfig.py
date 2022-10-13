from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import chaosconfig
from . import outagestrategy_enum


@dataclass_json
@dataclass
class SnowMonkeyConfig:
    chaos_config: chaosconfig.ChaosConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chaosConfig' }})
    dry_run: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    include_user_facing_descriptors: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeUserFacingDescriptors' }})
    outage_duration_from: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outageDurationFrom' }})
    outage_duration_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outageDurationTo' }})
    outage_strategy: outagestrategy_enum.OutageStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outageStrategy' }})
    start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    stop_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTime' }})
    target_groups: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetGroups' }})
    times_per_day: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timesPerDay' }})
    
