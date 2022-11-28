from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PeeredDNSDomain:
    r"""PeeredDNSDomain
    DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.
    """
    
    dns_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSuffix') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
