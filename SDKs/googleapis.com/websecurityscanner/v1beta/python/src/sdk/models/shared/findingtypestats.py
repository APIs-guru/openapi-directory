from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FindingTypeStats:
    r"""FindingTypeStats
    A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
    """
    
    finding_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingCount') }})
    finding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    
