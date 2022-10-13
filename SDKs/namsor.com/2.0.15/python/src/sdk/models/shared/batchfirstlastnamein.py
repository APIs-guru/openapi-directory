from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamein


@dataclass_json
@dataclass
class BatchFirstLastNameIn:
    personal_names: Optional[List[firstlastnamein.FirstLastNameIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
