from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecondaryIPRange:
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    range_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeName') }})
    
