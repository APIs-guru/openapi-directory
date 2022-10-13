from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import podcastsimple


@dataclass_json
@dataclass
class BestPodcastsResponse:
    has_next: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_next' }})
    has_previous: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_previous' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    listennotes_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_number' }})
    page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_number' }})
    parent_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    podcasts: List[podcastsimple.PodcastSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcasts' }})
    previous_page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_number' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
