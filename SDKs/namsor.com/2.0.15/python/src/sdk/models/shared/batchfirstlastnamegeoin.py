from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamegeoin


@dataclass_json
@dataclass
class BatchFirstLastNameGeoIn:
    personal_names: Optional[List[firstlastnamegeoin.FirstLastNameGeoIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
