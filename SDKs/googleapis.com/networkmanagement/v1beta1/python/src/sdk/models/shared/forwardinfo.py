from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ForwardInfoTargetEnum(str, Enum):
    TARGET_UNSPECIFIED = "TARGET_UNSPECIFIED"
    PEERING_VPC = "PEERING_VPC"
    VPN_GATEWAY = "VPN_GATEWAY"
    INTERCONNECT = "INTERCONNECT"
    GKE_MASTER = "GKE_MASTER"
    IMPORTED_CUSTOM_ROUTE_NEXT_HOP = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP"
    CLOUD_SQL_INSTANCE = "CLOUD_SQL_INSTANCE"
    ANOTHER_PROJECT = "ANOTHER_PROJECT"


@dataclass_json
@dataclass
class ForwardInfo:
    r"""ForwardInfo
    Details of the final state \"forward\" and associated resource.
    """
    
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    target: Optional[ForwardInfoTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
