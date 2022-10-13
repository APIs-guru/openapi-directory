from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lookbackconfiguration


@dataclass_json
@dataclass
class ReportsConfiguration:
    exposure_to_conversion_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposureToConversionEnabled' }})
    lookback_configuration: Optional[lookbackconfiguration.LookbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookbackConfiguration' }})
    report_generation_time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGenerationTimeZoneId' }})
    
