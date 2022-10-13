from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CountryInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    three_letter_iso_region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreeLetterISORegionName' }})
    two_letter_iso_region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TwoLetterISORegionName' }})
    
