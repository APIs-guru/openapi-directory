from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MatchingCriteria:
    r"""MatchingCriteria
    Matches events based on exact matches on the CloudEvents attributes.
    """
    
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
