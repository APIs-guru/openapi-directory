from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meta
from . import citiesrow


@dataclass_json
@dataclass
class OpenAqCitiesResult:
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: List[citiesrow.CitiesRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
