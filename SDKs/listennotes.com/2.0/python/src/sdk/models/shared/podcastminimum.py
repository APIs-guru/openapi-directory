from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PodcastMinimum:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    listen_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score') }})
    listen_score_global_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen_score_global_rank') }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listennotes_url') }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
