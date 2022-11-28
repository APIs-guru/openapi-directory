from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VersionSource:
    r"""VersionSource
    Describes a selector for extracting and matching an MSH field to a value.
    """
    
    msh_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mshField') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
