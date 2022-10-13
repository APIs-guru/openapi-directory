from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expirydetail
from . import restrictionevaluations


@dataclass_json
@dataclass
class MembershipRole:
    expiry_detail: Optional[expirydetail.ExpiryDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryDetail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restriction_evaluations: Optional[restrictionevaluations.RestrictionEvaluations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionEvaluations' }})
    
