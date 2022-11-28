from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddDNSZoneRequest:
    r"""AddDNSZoneRequest
    Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    dns_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSuffix') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
