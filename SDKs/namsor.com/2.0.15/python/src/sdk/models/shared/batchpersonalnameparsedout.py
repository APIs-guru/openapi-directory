from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personalnameparsedout


@dataclass_json
@dataclass
class BatchPersonalNameParsedOut:
    personal_names: Optional[List[personalnameparsedout.PersonalNameParsedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
