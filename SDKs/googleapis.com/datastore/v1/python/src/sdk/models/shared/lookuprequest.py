from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LookupRequest:
    r"""LookupRequest
    The request for Datastore.Lookup.
    """
    
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseId') }})
    keys: Optional[List[Key]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    read_options: Optional[ReadOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOptions') }})
    
