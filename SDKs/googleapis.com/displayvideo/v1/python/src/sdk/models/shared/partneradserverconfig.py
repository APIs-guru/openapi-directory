from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import measurementconfig


@dataclass_json
@dataclass
class PartnerAdServerConfig:
    measurement_config: Optional[measurementconfig.MeasurementConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementConfig' }})
    
