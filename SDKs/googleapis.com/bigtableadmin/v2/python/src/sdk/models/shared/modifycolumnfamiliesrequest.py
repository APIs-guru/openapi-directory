from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import modification


@dataclass_json
@dataclass
class ModifyColumnFamiliesRequest:
    modifications: Optional[List[modification.Modification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifications' }})
    
