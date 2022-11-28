from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErskineMayChapterOverview:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partNumber') }})
    sections: Optional[List[ErskineMaySectionOverview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
