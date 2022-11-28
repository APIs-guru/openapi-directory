from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Report:
    r"""Report
    Represents a report.
    """
    
    key: Optional[ReportKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metadata: Optional[ReportMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
