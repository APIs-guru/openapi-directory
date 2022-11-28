from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MediaItemWrapped:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[MediaItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
