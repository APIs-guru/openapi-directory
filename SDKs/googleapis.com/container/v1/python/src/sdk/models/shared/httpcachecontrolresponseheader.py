from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPCacheControlResponseHeader:
    r"""HTTPCacheControlResponseHeader
    RFC-2616: cache control support
    """
    
    age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    directive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directive') }})
    expires: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires') }})
    
