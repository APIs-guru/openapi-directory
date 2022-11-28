from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPFiltering:
    r"""IPFiltering
    The filtering configuration block for a service of globally.
    """
    
    blacklist: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklist') }})
    whitelist: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
