from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IndexedHotKey:
    r"""IndexedHotKey
    A message representing a (sparse) collection of hot keys for specific key buckets.
    """
    
    sparse_hot_keys: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparseHotKeys') }})
    
