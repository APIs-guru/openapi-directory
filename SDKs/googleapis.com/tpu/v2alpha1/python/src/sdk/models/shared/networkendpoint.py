from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkEndpoint:
    r"""NetworkEndpoint
    A network endpoint over which a TPU worker can be reached.
    """
    
    access_config: Optional[AccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
