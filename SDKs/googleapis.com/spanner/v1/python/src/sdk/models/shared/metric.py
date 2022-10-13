from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import localizedstring
from . import derivedmetric
from . import localizedstring
from . import indexedhotkey
from . import indexedkeyrangeinfos
from . import localizedstring
from . import metricmatrix
from . import localizedstring

class MetricAggregationEnum(str, Enum):
    AGGREGATION_UNSPECIFIED = "AGGREGATION_UNSPECIFIED"
    MAX = "MAX"
    SUM = "SUM"


@dataclass_json
@dataclass
class Metric:
    aggregation: Optional[MetricAggregationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregation' }})
    category: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    derived: Optional[derivedmetric.DerivedMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derived' }})
    display_label: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayLabel' }})
    has_nonzero_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasNonzeroData' }})
    hot_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotValue' }})
    indexed_hot_keys: Optional[dict[str, indexedhotkey.IndexedHotKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexedHotKeys' }})
    indexed_key_range_infos: Optional[dict[str, indexedkeyrangeinfos.IndexedKeyRangeInfos]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexedKeyRangeInfos' }})
    info: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    matrix: Optional[metricmatrix.MetricMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matrix' }})
    unit: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    
