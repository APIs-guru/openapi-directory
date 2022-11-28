from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCuratedPodcastsResponse:
    curated_lists: List[CuratedListSimple] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curated_lists') }})
    has_next: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_next') }})
    has_previous: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_previous') }})
    next_page_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_number') }})
    page_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    previous_page_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_number') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
