from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum(str, Enum):
    AUTHORIZED_SELLER_STATUS_UNSPECIFIED = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"


@dataclass_json
@dataclass
class AuthorizedSellerStatusAssignedTargetingOptionDetails:
    authorized_seller_status: Optional[AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedSellerStatus' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
