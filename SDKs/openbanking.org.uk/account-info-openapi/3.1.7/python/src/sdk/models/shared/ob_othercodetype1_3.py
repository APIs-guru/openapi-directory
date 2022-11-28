from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObOtherCodeType13:
    r"""ObOtherCodeType13
    Other Fee type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
