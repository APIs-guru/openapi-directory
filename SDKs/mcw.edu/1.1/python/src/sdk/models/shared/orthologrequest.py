from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrthologRequest:
    rgd_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rgdIds' }})
    species_type_keys: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speciesTypeKeys' }})
    
