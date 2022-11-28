from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextStream:
    r"""TextStream
    Encoding of a text stream. For example, closed captions or subtitles.
    """
    
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    mapping: Optional[List[TextMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    
