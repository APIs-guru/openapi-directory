from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstandthirdpartyaudiencetargetingsetting


@dataclass_json
@dataclass
class FirstAndThirdPartyAudienceGroup:
    settings: Optional[List[firstandthirdpartyaudiencetargetingsetting.FirstAndThirdPartyAudienceTargetingSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
