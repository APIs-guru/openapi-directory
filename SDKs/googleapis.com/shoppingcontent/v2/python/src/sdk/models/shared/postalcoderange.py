from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostalCodeRange:
    postal_code_range_begin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeRangeBegin') }})
    postal_code_range_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeRangeEnd') }})
    
