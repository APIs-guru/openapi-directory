from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Input:
    r"""Input
    Input asset.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    preprocessing_config: Optional[PreprocessingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preprocessingConfig') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
