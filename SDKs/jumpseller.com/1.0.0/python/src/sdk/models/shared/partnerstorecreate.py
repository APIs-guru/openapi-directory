from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PartnerStoreCreatePlanNameEnum(str, Enum):
    PRO = "pro"
    PLUS = "plus"
    PREMIUM = "premium"


@dataclass_json
@dataclass
class PartnerStoreCreate:
    aff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aff') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    plan_name: Optional[PartnerStoreCreatePlanNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_name') }})
    reject_duplicates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reject_duplicates') }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store_name') }})
    
