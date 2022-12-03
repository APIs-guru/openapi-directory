from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClassificationV1:
    r"""ClassificationV1
    An classification is a set of information for a specific industry, based on NAICs codes.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    naics_2017_6_digit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naics_2017_6_digit') }})
    naics_2017_6_digit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naics_2017_6_digit_description') }})
    
