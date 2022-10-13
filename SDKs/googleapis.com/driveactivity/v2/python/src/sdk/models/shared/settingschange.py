from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import restrictionchange


@dataclass_json
@dataclass
class SettingsChange:
    restriction_changes: Optional[List[restrictionchange.RestrictionChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionChanges' }})
    
