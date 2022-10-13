from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import genre
from . import podcasttypeaheadresult


@dataclass_json
@dataclass
class TypeaheadResponse:
    genres: Optional[List[genre.Genre]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genres' }})
    podcasts: Optional[List[podcasttypeaheadresult.PodcastTypeaheadResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcasts' }})
    terms: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
