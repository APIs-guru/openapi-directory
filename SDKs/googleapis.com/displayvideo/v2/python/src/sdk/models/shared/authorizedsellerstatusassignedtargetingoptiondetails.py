from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum(str, Enum):
    AUTHORIZED_SELLER_STATUS_UNSPECIFIED = "AUTHORIZED_SELLER_STATUS_UNSPECIFIED"
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS = "AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS"


@dataclass_json
@dataclass
class AuthorizedSellerStatusAssignedTargetingOptionDetailsInput:
    r"""AuthorizedSellerStatusAssignedTargetingOptionDetailsInput
    Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
    """
    
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclass
class AuthorizedSellerStatusAssignedTargetingOptionDetails:
    r"""AuthorizedSellerStatusAssignedTargetingOptionDetails
    Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
    """
    
    authorized_seller_status: Optional[AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedSellerStatus') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
