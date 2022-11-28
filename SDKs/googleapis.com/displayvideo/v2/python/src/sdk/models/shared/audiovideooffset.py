from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioVideoOffset:
    r"""AudioVideoOffset
    The length an audio or a video has been played.
    """
    
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
