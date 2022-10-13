from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2Audience:
    age_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGroups' }})
    genders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genders' }})
    
