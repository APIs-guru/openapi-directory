from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Page:
    r"""Page
    Detected page from OCR.
    """
    
    blocks: Optional[List[Block]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property: Optional[TextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
