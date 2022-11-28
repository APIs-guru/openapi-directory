from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationCategory:
    r"""ApplicationCategory
    An application category object.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    
