from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publication
from . import billstagesittingpublicationlist


@dataclass_json
@dataclass
class BillStagePublicationList:
    bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billStageId' }})
    publications: Optional[List[publication.Publication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publications' }})
    sittings: Optional[List[billstagesittingpublicationlist.BillStageSittingPublicationList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sittings' }})
    
