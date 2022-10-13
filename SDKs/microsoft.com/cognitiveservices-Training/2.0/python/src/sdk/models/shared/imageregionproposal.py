from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionproposal


@dataclass_json
@dataclass
class ImageRegionProposal:
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    proposals: Optional[List[regionproposal.RegionProposal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposals' }})
    
