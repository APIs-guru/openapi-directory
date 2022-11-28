from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPHeaderMatch:
    r"""HTTPHeaderMatch
    Specification of HTTP header match attributes.
    """
    
    header_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerName') }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexMatch') }})
    
