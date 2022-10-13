from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import podcastsimple


@dataclass_json
@dataclass
class CuratedListFull:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    podcasts: Optional[List[podcastsimple.PodcastSimple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcasts' }})
    pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pub_date_ms' }})
    source_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_domain' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_url' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
