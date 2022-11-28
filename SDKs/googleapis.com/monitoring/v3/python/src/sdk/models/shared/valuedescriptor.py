from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ValueDescriptorMetricKindEnum(str, Enum):
    METRIC_KIND_UNSPECIFIED = "METRIC_KIND_UNSPECIFIED"
    GAUGE = "GAUGE"
    DELTA = "DELTA"
    CUMULATIVE = "CUMULATIVE"

class ValueDescriptorValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INT64 = "INT64"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    DISTRIBUTION = "DISTRIBUTION"
    MONEY = "MONEY"


@dataclass_json
@dataclass
class ValueDescriptor:
    r"""ValueDescriptor
    A descriptor for the value columns in a data point.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metric_kind: Optional[ValueDescriptorMetricKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKind') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value_type: Optional[ValueDescriptorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
