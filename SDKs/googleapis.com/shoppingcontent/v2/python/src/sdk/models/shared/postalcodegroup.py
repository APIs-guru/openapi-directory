from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import postalcoderange


@dataclass_json
@dataclass
class PostalCodeGroup:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postal_code_ranges: Optional[List[postalcoderange.PostalCodeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeRanges' }})
    
