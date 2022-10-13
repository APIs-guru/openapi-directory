from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import country


@dataclass_json
@dataclass
class CountriesListResponse:
    countries: Optional[List[country.Country]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
