from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personalnamegenderedout


@dataclass_json
@dataclass
class BatchPersonalNameGenderedOut:
    personal_names: Optional[List[personalnamegenderedout.PersonalNameGenderedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
