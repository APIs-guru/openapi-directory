from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformSettings:
    r"""TransformSettings
    Settings to transform a JWT token and its location
    """
    
    location: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mapping_settings: MappingSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingSettings') }})
    
