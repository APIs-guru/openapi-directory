from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TextInput:
    r"""TextInput
    Identifies which input file and track should be used.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
