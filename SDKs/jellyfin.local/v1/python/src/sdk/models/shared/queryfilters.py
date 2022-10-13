from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nameguidpair


@dataclass_json
@dataclass
class QueryFilters:
    genres: Optional[List[nameguidpair.NameGUIDPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Genres' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
