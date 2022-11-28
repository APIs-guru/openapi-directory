from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPv6Range:
    r"""IPv6Range
    An object representing an IPv6 range.
    
    """
    
    prefix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    route_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_target') }})
    
