from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectValues:
    r"""ObjectValues
    List of object values.
    """
    
    values: Optional[List[StructuredDataObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
