from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionalLocationListAssignedTargetingOptionDetails:
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negative' }})
    regional_location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalLocationListId' }})
    
