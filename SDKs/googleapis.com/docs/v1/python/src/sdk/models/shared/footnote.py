from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Footnote:
    r"""Footnote
    A document footnote.
    """
    
    content: Optional[List[StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    footnote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnoteId') }})
    

@dataclass_json
@dataclass
class FootnoteInput:
    r"""FootnoteInput
    A document footnote.
    """
    
    content: Optional[List[StructuralElementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    footnote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnoteId') }})
    
