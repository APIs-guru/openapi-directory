from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnFamily:
    r"""ColumnFamily
    A set of columns within a table which share a common configuration.
    """
    
    gc_rule: Optional[GcRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcRule') }})
    stats: Optional[ColumnFamilyStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
