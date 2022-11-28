from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CounterStructuredNameAndMetadata:
    r"""CounterStructuredNameAndMetadata
    A single message which encapsulates structured name and metadata for a given counter.
    """
    
    metadata: Optional[CounterMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[CounterStructuredName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
