from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostalCodeRange:
    postal_code_range_begin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeRangeBegin' }})
    postal_code_range_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeRangeEnd' }})
    
