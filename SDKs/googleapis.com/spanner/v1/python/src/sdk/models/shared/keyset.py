from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeySet:
    r"""KeySet
    `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.
    """
    
    all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    keys: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    ranges: Optional[List[KeyRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    
