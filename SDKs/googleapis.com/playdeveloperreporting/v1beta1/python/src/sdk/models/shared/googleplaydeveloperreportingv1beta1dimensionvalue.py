from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1DimensionValue:
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int64Value' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    value_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueLabel' }})
    
