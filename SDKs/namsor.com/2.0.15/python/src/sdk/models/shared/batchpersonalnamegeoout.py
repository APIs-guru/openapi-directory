from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personalnamegeoout


@dataclass_json
@dataclass
class BatchPersonalNameGeoOut:
    personal_names: Optional[List[personalnamegeoout.PersonalNameGeoOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
