from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRunV2VpcAccessEgressEnum(str, Enum):
    VPC_EGRESS_UNSPECIFIED = "VPC_EGRESS_UNSPECIFIED"
    ALL_TRAFFIC = "ALL_TRAFFIC"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"


@dataclass_json
@dataclass
class GoogleCloudRunV2VpcAccess:
    r"""GoogleCloudRunV2VpcAccess
    VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
    """
    
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connector') }})
    egress: Optional[GoogleCloudRunV2VpcAccessEgressEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egress') }})
    
