from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateClusterConfigInput:
    r"""PrivateClusterConfigInput
    Configuration options for the private GKE cluster in a Cloud Composer environment.
    """
    
    enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateEndpoint') }})
    master_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterIpv4CidrBlock') }})
    

@dataclass_json
@dataclass
class PrivateClusterConfig:
    r"""PrivateClusterConfig
    Configuration options for the private GKE cluster in a Cloud Composer environment.
    """
    
    enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateEndpoint') }})
    master_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterIpv4CidrBlock') }})
    master_ipv4_reserved_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterIpv4ReservedRange') }})
    
