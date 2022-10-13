from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personalnamein


@dataclass_json
@dataclass
class BatchPersonalNameIn:
    personal_names: Optional[List[personalnamein.PersonalNameIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
