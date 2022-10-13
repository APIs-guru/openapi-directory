from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamegenderedout


@dataclass_json
@dataclass
class BatchFirstLastNameGenderedOut:
    personal_names: Optional[List[firstlastnamegenderedout.FirstLastNameGenderedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
