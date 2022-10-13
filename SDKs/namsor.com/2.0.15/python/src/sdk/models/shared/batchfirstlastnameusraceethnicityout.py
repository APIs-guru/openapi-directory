from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnameusraceethnicityout


@dataclass_json
@dataclass
class BatchFirstLastNameUsRaceEthnicityOut:
    personal_names: Optional[List[firstlastnameusraceethnicityout.FirstLastNameUsRaceEthnicityOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
