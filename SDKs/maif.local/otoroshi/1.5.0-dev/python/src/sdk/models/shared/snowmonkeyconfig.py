from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SnowMonkeyConfig:
    r"""SnowMonkeyConfig
    Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
    """
    
    chaos_config: ChaosConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chaosConfig') }})
    dry_run: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    include_user_facing_descriptors: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeUserFacingDescriptors') }})
    outage_duration_from: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageDurationFrom') }})
    outage_duration_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageDurationTo') }})
    outage_strategy: OutageStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outageStrategy') }})
    start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    stop_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTime') }})
    target_groups: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroups') }})
    times_per_day: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timesPerDay') }})
    
