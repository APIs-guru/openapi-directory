from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TCPCheck:
    r"""TCPCheck
    Information required for a TCP Uptime check request.
    """
    
    ping_config: Optional[PingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pingConfig') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
