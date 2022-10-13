from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import badgeexpiry
from . import criteria
from . import openbadgeclass


@dataclass_json
@dataclass
class Badge:
    badge_expiry: Optional[badgeexpiry.BadgeExpiry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeExpiry' }})
    badge_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeUrl' }})
    criterias: Optional[criteria.Criteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterias' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    open_badge: Optional[openbadgeclass.OpenBadgeClass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openBadge' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
