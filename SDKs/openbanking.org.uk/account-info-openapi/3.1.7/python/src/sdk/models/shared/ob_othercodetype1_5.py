from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObOtherCodeType15:
    r"""ObOtherCodeType15
    Other fee rate type which is not in the standard rate type list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
