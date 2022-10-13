from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repricingruleeffectivetimefixedtimeperiod


@dataclass_json
@dataclass
class RepricingRuleEffectiveTime:
    fixed_time_periods: Optional[List[repricingruleeffectivetimefixedtimeperiod.RepricingRuleEffectiveTimeFixedTimePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedTimePeriods' }})
    
