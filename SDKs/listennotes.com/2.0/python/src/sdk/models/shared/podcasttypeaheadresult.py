from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PodcastTypeaheadResult:
    explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit_content') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    publisher_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_highlighted') }})
    publisher_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher_original') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_highlighted') }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_original') }})
    
