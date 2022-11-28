from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructType:
    r"""StructType
    `StructType` defines the fields of a STRUCT type.
    """
    
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
