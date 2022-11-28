from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VerificationSettings:
    r"""VerificationSettings
    Settings to verify the value of JWT token fields
    """
    
    fields: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    mapping_settings: Optional[MappingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingSettings') }})
    
