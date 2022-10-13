from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import genre


@dataclass_json
@dataclass
class GetGenresResponse:
    genres: List[genre.Genre] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    
