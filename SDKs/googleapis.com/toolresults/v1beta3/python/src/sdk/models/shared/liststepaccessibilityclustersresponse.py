from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStepAccessibilityClustersResponse:
    r"""ListStepAccessibilityClustersResponse
    Response message for AccessibilityService.ListStepAccessibilityClusters.
    """
    
    clusters: Optional[List[SuggestionClusterProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
