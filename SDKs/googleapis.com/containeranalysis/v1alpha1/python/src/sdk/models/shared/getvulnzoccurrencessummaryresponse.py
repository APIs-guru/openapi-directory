from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetVulnzOccurrencesSummaryResponse:
    r"""GetVulnzOccurrencesSummaryResponse
    A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.
    """
    
    counts: Optional[List[SeverityCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    
