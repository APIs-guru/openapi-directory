from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatafeedTarget:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    excluded_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedDestinations' }})
    included_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedDestinations' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    
