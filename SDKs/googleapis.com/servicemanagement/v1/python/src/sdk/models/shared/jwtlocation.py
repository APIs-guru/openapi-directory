from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JwtLocation:
    r"""JwtLocation
    Specifies a location to extract JWT from an API request.
    """
    
    cookie: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie') }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    value_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuePrefix') }})
    
