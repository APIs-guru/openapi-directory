from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import personalnamegeoin


@dataclass_json
@dataclass
class BatchPersonalNameGeoIn:
    personal_names: Optional[List[personalnamegeoin.PersonalNameGeoIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
