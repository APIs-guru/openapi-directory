from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Zero:
    r"""Zero
    Connect to an App User
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
