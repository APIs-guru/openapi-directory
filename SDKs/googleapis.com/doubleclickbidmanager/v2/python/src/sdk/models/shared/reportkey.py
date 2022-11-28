from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportKey:
    r"""ReportKey
    Key used to identify a report.
    """
    
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryId') }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    
