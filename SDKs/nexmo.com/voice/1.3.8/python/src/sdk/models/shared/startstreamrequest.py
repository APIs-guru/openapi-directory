from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartStreamRequest:
    stream_url: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_url') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    loop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loop') }})
    
