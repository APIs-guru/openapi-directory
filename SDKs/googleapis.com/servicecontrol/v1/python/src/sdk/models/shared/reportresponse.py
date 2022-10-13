from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reporterror


@dataclass_json
@dataclass
class ReportResponse:
    report_errors: Optional[List[reporterror.ReportError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportErrors' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    service_rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRolloutId' }})
    
