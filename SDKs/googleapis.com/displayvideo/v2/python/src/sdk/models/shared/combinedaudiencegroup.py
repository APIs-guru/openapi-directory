from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import combinedaudiencetargetingsetting


@dataclass_json
@dataclass
class CombinedAudienceGroup:
    settings: Optional[List[combinedaudiencetargetingsetting.CombinedAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
