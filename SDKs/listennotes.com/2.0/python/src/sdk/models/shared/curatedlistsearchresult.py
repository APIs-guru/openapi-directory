from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import podcastminimum


@dataclass_json
@dataclass
class CuratedListSearchResult:
    description_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_highlighted' }})
    description_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_original' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    podcasts: Optional[List[podcastminimum.PodcastMinimum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcasts' }})
    pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pub_date_ms' }})
    source_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_domain' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_url' }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_highlighted' }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_original' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
