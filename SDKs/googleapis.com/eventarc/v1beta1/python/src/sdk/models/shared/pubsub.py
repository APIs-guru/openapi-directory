from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Pubsub:
    r"""Pubsub
    Represents a Pub/Sub transport.
    """
    
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclass_json
@dataclass
class PubsubInput:
    r"""PubsubInput
    Represents a Pub/Sub transport.
    """
    
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
