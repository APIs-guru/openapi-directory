from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnameoriginedout


@dataclass_json
@dataclass
class BatchFirstLastNameOriginedOut:
    personal_names: Optional[List[firstlastnameoriginedout.FirstLastNameOriginedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
