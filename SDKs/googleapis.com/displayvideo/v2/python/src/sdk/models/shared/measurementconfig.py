from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MeasurementConfig:
    r"""MeasurementConfig
    Measurement settings of a partner.
    """
    
    dv360_to_cm_cost_reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv360ToCmCostReportingEnabled') }})
    dv360_to_cm_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dv360ToCmDataSharingEnabled') }})
    
