from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publication


@dataclass_json
@dataclass
class BillStageSittingPublicationList:
    publications: Optional[List[publication.Publication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publications' }})
    sitting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sittingId' }})
    
