from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork:
    r"""GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork
    Cloud VPC Network used to run the infrastructure.
    """
    
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    sub_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subNetwork') }})
    
