from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Version:
    build: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Build') }})
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Major') }})
    major_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MajorRevision') }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Minor') }})
    minor_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinorRevision') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    
