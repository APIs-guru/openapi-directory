from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RoutingVpcInput:
    r"""RoutingVpcInput
    RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
    """
    
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class RoutingVpc:
    r"""RoutingVpc
    RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
    """
    
    required_for_new_site_to_site_data_transfer_spokes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredForNewSiteToSiteDataTransferSpokes') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
