from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DNSPeering:
    r"""DNSPeering
    DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNetwork') }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    
