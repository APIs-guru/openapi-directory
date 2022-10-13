from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamegenderin


@dataclass_json
@dataclass
class BatchFirstLastNameGenderIn:
    personal_names: Optional[List[firstlastnamegenderin.FirstLastNameGenderIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
