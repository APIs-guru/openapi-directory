from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OfferingMetadata:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    root_content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootContentId') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
