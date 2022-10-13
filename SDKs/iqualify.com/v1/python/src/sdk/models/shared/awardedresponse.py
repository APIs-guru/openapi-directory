from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwardedResponse:
    awarded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awarded' }})
    badge_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeId' }})
    badge_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeUrl' }})
    
