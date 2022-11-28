from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRunV2TCPSocketAction:
    r"""GoogleCloudRunV2TCPSocketAction
    TCPSocketAction describes an action based on opening a socket
    """
    
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
