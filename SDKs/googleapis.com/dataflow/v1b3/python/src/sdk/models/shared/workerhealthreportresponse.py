from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkerHealthReportResponse:
    r"""WorkerHealthReportResponse
    WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
    """
    
    report_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInterval') }})
    
