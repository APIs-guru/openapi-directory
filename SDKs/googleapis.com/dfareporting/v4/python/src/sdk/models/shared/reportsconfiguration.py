from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportsConfiguration:
    r"""ReportsConfiguration
    Reporting Configuration
    """
    
    exposure_to_conversion_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureToConversionEnabled') }})
    lookback_configuration: Optional[LookbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackConfiguration') }})
    report_generation_time_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGenerationTimeZoneId') }})
    
