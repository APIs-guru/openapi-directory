from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import morehourstype
from . import servicetype


@dataclass_json
@dataclass
class Category:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    more_hours_types: Optional[List[morehourstype.MoreHoursType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moreHoursTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_types: Optional[List[servicetype.ServiceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTypes' }})
    
