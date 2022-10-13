from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namegeoin


@dataclass_json
@dataclass
class BatchNameGeoIn:
    proper_nouns: Optional[List[namegeoin.NameGeoIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properNouns' }})
    
