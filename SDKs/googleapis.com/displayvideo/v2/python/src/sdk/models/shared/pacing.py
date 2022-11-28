from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PacingPacingPeriodEnum(str, Enum):
    PACING_PERIOD_UNSPECIFIED = "PACING_PERIOD_UNSPECIFIED"
    PACING_PERIOD_DAILY = "PACING_PERIOD_DAILY"
    PACING_PERIOD_FLIGHT = "PACING_PERIOD_FLIGHT"

class PacingPacingTypeEnum(str, Enum):
    PACING_TYPE_UNSPECIFIED = "PACING_TYPE_UNSPECIFIED"
    PACING_TYPE_AHEAD = "PACING_TYPE_AHEAD"
    PACING_TYPE_ASAP = "PACING_TYPE_ASAP"
    PACING_TYPE_EVEN = "PACING_TYPE_EVEN"


@dataclass_json
@dataclass
class Pacing:
    r"""Pacing
    Settings that control the rate at which a budget is spent.
    """
    
    daily_max_impressions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyMaxImpressions') }})
    daily_max_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyMaxMicros') }})
    pacing_period: Optional[PacingPacingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacingPeriod') }})
    pacing_type: Optional[PacingPacingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pacingType') }})
    
