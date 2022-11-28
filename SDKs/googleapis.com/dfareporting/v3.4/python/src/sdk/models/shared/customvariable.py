from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomVariable:
    r"""CustomVariable
    Custom variable.
    """
    
    index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
