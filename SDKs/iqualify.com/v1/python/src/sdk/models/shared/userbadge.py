from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import criteria
from . import openbadgeclass


@dataclass_json
@dataclass
class UserBadgeBadgeExpiry:
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires' }})
    

@dataclass_json
@dataclass
class UserBadge:
    awarded_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awardedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    badge_expiry: Optional[UserBadgeBadgeExpiry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeExpiry' }})
    badge_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeUrl' }})
    criterias: Optional[criteria.Criteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterias' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    open_badge: Optional[openbadgeclass.OpenBadgeClass] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openBadge' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
