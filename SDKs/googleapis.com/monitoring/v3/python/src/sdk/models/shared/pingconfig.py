from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PingConfig:
    r"""PingConfig
    Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
    """
    
    pings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pingsCount') }})
    
