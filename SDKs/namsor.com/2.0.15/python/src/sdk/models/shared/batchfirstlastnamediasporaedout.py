from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstlastnamediasporaedout


@dataclass_json
@dataclass
class BatchFirstLastNameDiasporaedOut:
    personal_names: Optional[List[firstlastnamediasporaedout.FirstLastNameDiasporaedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
