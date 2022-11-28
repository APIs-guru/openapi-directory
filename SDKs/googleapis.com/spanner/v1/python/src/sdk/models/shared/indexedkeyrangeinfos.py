from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IndexedKeyRangeInfos:
    r"""IndexedKeyRangeInfos
    A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.
    """
    
    key_range_infos: Optional[dict[str, KeyRangeInfos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyRangeInfos') }})
    
