from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataDto:
    in_pos: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inPos') }})
    source: Optional[SourceDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
