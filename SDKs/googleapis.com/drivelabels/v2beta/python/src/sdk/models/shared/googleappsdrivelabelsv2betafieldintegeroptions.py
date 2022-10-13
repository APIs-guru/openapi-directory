from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldIntegerOptions:
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    
