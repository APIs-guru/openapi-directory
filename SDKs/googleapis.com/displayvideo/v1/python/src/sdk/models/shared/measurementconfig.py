from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MeasurementConfig:
    dv360_to_cm_cost_reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dv360ToCmCostReportingEnabled' }})
    dv360_to_cm_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dv360ToCmDataSharingEnabled' }})
    
