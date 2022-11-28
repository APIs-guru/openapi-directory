from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Mount:
    r"""Mount
    Carries information about a particular disk mount inside a container.
    """
    
    disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    
