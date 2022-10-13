from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import city


@dataclass_json
@dataclass
class CitiesListResponse:
    cities: Optional[List[city.City]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cities' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
