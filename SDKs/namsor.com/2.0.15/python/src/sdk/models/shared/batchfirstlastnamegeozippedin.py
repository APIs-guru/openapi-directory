from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamegeozippedin


@dataclass_json
@dataclass
class BatchFirstLastNameGeoZippedIn:
    personal_names: Optional[List[firstlastnamegeozippedin.FirstLastNameGeoZippedIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
