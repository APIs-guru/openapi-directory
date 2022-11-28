from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Address:
    r"""Address
    Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
    """
    
    pipe: Optional[Pipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipe') }})
    socket_address: Optional[SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socketAddress') }})
    
