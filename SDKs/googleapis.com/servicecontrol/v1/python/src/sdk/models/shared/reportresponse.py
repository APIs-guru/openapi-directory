from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportResponse:
    r"""ReportResponse
    Response message for the Report method.
    """
    
    report_errors: Optional[List[ReportError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportErrors') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    service_rollout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRolloutId') }})
    
