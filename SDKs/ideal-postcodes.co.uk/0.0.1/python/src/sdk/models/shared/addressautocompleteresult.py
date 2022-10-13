from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addressautocompletehit


@dataclass_json
@dataclass
class AddressAutocompleteResult:
    hits: Optional[List[addressautocompletehit.AddressAutocompleteHit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hits' }})
    
