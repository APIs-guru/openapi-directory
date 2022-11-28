from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetricAggregationEnum(str, Enum):
    AGGREGATION_UNSPECIFIED = "AGGREGATION_UNSPECIFIED"
    MAX = "MAX"
    SUM = "SUM"


@dataclass_json
@dataclass
class Metric:
    r"""Metric
    A message representing the actual monitoring data, values for each key bucket over time, of a metric.
    """
    
    aggregation: Optional[MetricAggregationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    category: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    derived: Optional[DerivedMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derived') }})
    display_label: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLabel') }})
    has_nonzero_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasNonzeroData') }})
    hot_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotValue') }})
    indexed_hot_keys: Optional[dict[str, IndexedHotKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexedHotKeys') }})
    indexed_key_range_infos: Optional[dict[str, IndexedKeyRangeInfos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexedKeyRangeInfos') }})
    info: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    matrix: Optional[MetricMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrix') }})
    unit: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    
