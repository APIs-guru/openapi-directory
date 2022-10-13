from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRunV2VpcAccessEgressEnum(str, Enum):
    VPC_EGRESS_UNSPECIFIED = "VPC_EGRESS_UNSPECIFIED"
    ALL_TRAFFIC = "ALL_TRAFFIC"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRunV2VpcAccess:
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connector' }})
    egress: Optional[GoogleCloudRunV2VpcAccessEgressEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egress' }})
    
