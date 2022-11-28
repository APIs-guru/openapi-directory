from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTargetedPublishersRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedPublishersRequest:
    r"""AddTargetedPublishersRequest
    A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
    """
    
    publisher_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherIds') }})
    targeting_mode: Optional[AddTargetedPublishersRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingMode') }})
    
