from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import curatedlistsimple


@dataclass_json
@dataclass
class GetCuratedPodcastsResponse:
    curated_lists: List[curatedlistsimple.CuratedListSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curated_lists' }})
    has_next: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_next' }})
    has_previous: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_previous' }})
    next_page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_number' }})
    page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_number' }})
    previous_page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_number' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
