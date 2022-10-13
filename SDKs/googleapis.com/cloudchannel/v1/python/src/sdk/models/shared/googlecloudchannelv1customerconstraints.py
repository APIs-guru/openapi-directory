from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "CUSTOMER_TYPE_UNSPECIFIED"
    DOMAIN = "DOMAIN"
    TEAM = "TEAM"

class GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum(str, Enum):
    PROMOTIONAL_TYPE_UNSPECIFIED = "PROMOTIONAL_TYPE_UNSPECIFIED"
    NEW_UPGRADE = "NEW_UPGRADE"
    TRANSFER = "TRANSFER"
    PROMOTION_SWITCH = "PROMOTION_SWITCH"


@dataclass_json
@dataclass
class GoogleCloudChannelV1CustomerConstraints:
    allowed_customer_types: Optional[List[GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedCustomerTypes' }})
    allowed_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedRegions' }})
    promotional_order_types: Optional[List[GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionalOrderTypes' }})
    
