from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementsGenerateTagsResponse:
    r"""PlacementsGenerateTagsResponse
    Placement GenerateTags Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    placement_tags: Optional[List[PlacementTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTags') }})
    
