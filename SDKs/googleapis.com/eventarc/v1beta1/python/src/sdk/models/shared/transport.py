from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transport:
    r"""Transport
    Represents the transport intermediaries created for the trigger in order to deliver events.
    """
    
    pubsub: Optional[Pubsub] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsub') }})
    

@dataclass_json
@dataclass
class TransportInput:
    r"""TransportInput
    Represents the transport intermediaries created for the trigger in order to deliver events.
    """
    
    pubsub: Optional[PubsubInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsub') }})
    
