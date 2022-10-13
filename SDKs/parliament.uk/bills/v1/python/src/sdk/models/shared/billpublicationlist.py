from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billpublication


@dataclass_json
@dataclass
class BillPublicationList:
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billId' }})
    publications: Optional[List[billpublication.BillPublication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publications' }})
    
