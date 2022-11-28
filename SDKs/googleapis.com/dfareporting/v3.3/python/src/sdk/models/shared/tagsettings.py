from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagSettings:
    r"""TagSettings
    Dynamic and Image Tag Settings.
    """
    
    dynamic_tag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicTagEnabled') }})
    image_tag_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagEnabled') }})
    
