from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrafficPercentStrategy:
    r"""TrafficPercentStrategy
    Strategy that specifies how clients of Google Service Controller want to send traffic to use different config versions. This is generally used by API proxy to split traffic based on your configured percentage for each config version. One example of how to gradually rollout a new service configuration using this strategy: Day 1 Rollout { id: \"example.googleapis.com/rollout_20160206\" traffic_percent_strategy { percentages: { \"example.googleapis.com/20160201\": 70.00 \"example.googleapis.com/20160206\": 30.00 } } } Day 2 Rollout { id: \"example.googleapis.com/rollout_20160207\" traffic_percent_strategy: { percentages: { \"example.googleapis.com/20160206\": 100.00 } } }
    """
    
    percentages: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentages') }})
    
