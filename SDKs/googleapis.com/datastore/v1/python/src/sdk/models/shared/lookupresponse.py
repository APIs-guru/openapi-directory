from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LookupResponse:
    r"""LookupResponse
    The response for Datastore.Lookup.
    """
    
    deferred: Optional[List[Key]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deferred') }})
    found: Optional[List[EntityResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    missing: Optional[List[EntityResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missing') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
