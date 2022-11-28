from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Script:
    r"""Script
    A script to transformer otoroshi requests 
    """
    
    code: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    desc: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
