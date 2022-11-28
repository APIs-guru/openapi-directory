from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HeaderInput:
    r"""HeaderInput
    A document header.
    """
    
    content: Optional[List[StructuralElementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerId') }})
    

@dataclass_json
@dataclass
class Header:
    r"""Header
    A document header.
    """
    
    content: Optional[List[StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    header_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerId') }})
    
