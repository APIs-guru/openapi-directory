from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placementtag


@dataclass_json
@dataclass
class PlacementsGenerateTagsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    placement_tags: Optional[List[placementtag.PlacementTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementTags' }})
    
