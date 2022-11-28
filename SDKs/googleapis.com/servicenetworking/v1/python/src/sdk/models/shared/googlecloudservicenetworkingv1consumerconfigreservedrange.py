from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudServicenetworkingV1ConsumerConfigReservedRange:
    r"""GoogleCloudServicenetworkingV1ConsumerConfigReservedRange
    Allocated IP address ranges for this private service access connection.
    """
    
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    ip_prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipPrefixLength') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
