from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilteringAttribute:
    r"""FilteringAttribute
    A representation of the FilteringAttribute resource. Filtering attributes are per event type.
    """
    
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    path_pattern_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathPatternSupported') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
