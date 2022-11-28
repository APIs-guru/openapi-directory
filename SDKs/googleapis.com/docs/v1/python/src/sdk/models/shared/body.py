from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BodyInput:
    r"""BodyInput
    The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
    """
    
    content: Optional[List[StructuralElementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclass
class Body:
    r"""Body
    The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
    """
    
    content: Optional[List[StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    
