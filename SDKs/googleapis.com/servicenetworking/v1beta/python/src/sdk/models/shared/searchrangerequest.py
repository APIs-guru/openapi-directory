from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchRangeRequest:
    r"""SearchRangeRequest
    Request to search for an unused range within allocated ranges.
    """
    
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipPrefixLength') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    
