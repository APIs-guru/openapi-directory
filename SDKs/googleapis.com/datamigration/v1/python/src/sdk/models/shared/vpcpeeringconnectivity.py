from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcPeeringConnectivity:
    r"""VpcPeeringConnectivity
    The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
    """
    
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
