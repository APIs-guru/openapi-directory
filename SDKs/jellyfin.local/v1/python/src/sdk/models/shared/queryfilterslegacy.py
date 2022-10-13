from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryFiltersLegacy:
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Genres' }})
    official_ratings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfficialRatings' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    years: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Years' }})
    
