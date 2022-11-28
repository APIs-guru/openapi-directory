from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemStructuredData:
    r"""ItemStructuredData
    Available structured data fields for the item.
    """
    
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    object: Optional[StructuredDataObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    
