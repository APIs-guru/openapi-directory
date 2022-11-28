from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyColumnFamiliesRequest:
    r"""ModifyColumnFamiliesRequest
    Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
    """
    
    modifications: Optional[List[Modification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifications') }})
    
