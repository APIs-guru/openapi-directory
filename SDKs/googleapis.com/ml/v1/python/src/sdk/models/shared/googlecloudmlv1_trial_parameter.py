from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1TrialParameter:
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatValue' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
