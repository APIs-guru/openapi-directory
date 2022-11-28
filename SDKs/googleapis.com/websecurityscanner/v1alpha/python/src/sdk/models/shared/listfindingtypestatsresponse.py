from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingTypeStatsResponse:
    r"""ListFindingTypeStatsResponse
    Response for the `ListFindingTypeStats` method.
    """
    
    finding_type_stats: Optional[List[FindingTypeStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingTypeStats') }})
    
