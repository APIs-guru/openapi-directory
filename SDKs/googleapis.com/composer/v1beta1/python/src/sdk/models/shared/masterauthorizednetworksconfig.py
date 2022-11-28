from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MasterAuthorizedNetworksConfig:
    r"""MasterAuthorizedNetworksConfig
    Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
    """
    
    cidr_blocks: Optional[List[CidrBlock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlocks') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
