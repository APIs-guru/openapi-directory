from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateConfigReportResponse:
    r"""GenerateConfigReportResponse
    Response message for GenerateConfigReport method.
    """
    
    change_reports: Optional[List[ChangeReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeReports') }})
    diagnostics: Optional[List[Diagnostic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
