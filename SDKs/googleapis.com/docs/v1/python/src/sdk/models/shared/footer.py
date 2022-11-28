from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Footer:
    r"""Footer
    A document footer.
    """
    
    content: Optional[List[StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerId') }})
    

@dataclass_json
@dataclass
class FooterInput:
    r"""FooterInput
    A document footer.
    """
    
    content: Optional[List[StructuralElementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    footer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footerId') }})
    
