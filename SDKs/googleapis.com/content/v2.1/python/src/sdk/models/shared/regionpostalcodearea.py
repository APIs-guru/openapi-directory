from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionpostalcodeareapostalcoderange


@dataclass_json
@dataclass
class RegionPostalCodeArea:
    postal_codes: Optional[List[regionpostalcodeareapostalcoderange.RegionPostalCodeAreaPostalCodeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodes' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
