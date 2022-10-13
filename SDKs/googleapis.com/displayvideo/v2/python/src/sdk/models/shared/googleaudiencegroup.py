from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleaudiencetargetingsetting


@dataclass_json
@dataclass
class GoogleAudienceGroup:
    settings: Optional[List[googleaudiencetargetingsetting.GoogleAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
