from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import distribution
from . import money


@dataclass_json
@dataclass
class MetricValue:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    distribution_value: Optional[distribution.Distribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionValue' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int64Value' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    money_value: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moneyValue' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
