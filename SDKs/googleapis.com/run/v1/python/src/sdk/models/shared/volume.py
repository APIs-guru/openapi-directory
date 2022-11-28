from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    Volume represents a named volume in a container.
    """
    
    config_map: Optional[ConfigMapVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMap') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret: Optional[SecretVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
