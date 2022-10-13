from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusstatsdimensions


@dataclass_json
@dataclass
class EnterpriseCrmEventbusStats:
    dimensions: Optional[enterprisecrmeventbusstatsdimensions.EnterpriseCrmEventbusStatsDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    duration_in_seconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInSeconds' }})
    error_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorRate' }})
    qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qps' }})
    warning_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warningRate' }})
    
