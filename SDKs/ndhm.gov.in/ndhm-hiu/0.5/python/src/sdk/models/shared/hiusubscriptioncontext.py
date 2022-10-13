from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import subscriptioncategory_enum
from . import organizationrepresentation
from . import subscriptionperiod


@dataclass_json
@dataclass
class HiuSubscriptionContext:
    categories: List[subscriptioncategory_enum.SubscriptionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    hip: Optional[organizationrepresentation.OrganizationRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    period: subscriptionperiod.SubscriptionPeriod = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
