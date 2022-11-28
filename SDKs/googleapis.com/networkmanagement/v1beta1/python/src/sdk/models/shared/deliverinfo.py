from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeliverInfoTargetEnum(str, Enum):
    TARGET_UNSPECIFIED = "TARGET_UNSPECIFIED"
    INSTANCE = "INSTANCE"
    INTERNET = "INTERNET"
    GOOGLE_API = "GOOGLE_API"
    GKE_MASTER = "GKE_MASTER"
    CLOUD_SQL_INSTANCE = "CLOUD_SQL_INSTANCE"
    PSC_PUBLISHED_SERVICE = "PSC_PUBLISHED_SERVICE"
    PSC_GOOGLE_API = "PSC_GOOGLE_API"
    PSC_VPC_SC = "PSC_VPC_SC"


@dataclass_json
@dataclass
class DeliverInfo:
    r"""DeliverInfo
    Details of the final state \"deliver\" and associated resource.
    """
    
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    target: Optional[DeliverInfoTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
