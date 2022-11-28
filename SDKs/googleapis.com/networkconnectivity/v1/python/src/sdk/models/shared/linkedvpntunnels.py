from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkedVpnTunnelsInput:
    r"""LinkedVpnTunnelsInput
    A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
    """
    
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclass_json
@dataclass
class LinkedVpnTunnels:
    r"""LinkedVpnTunnels
    A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
    """
    
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    
