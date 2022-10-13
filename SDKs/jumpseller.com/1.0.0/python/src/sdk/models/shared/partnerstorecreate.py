from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PartnerStoreCreatePlanNameEnum(str, Enum):
    PRO = "pro"
    PLUS = "plus"
    PREMIUM = "premium"


@dataclass_json
@dataclass
class PartnerStoreCreate:
    aff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aff' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    plan_name: Optional[PartnerStoreCreatePlanNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_name' }})
    reject_duplicates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject_duplicates' }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store_name' }})
    
