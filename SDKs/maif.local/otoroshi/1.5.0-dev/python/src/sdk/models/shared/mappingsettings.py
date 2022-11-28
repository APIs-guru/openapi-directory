from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MappingSettings:
    r"""MappingSettings
    Settings to change fields of a JWT token
    """
    
    map: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    remove: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove') }})
    values: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
