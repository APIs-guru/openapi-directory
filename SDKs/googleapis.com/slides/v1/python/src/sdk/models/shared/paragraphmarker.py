from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParagraphMarker:
    r"""ParagraphMarker
    A TextElement kind that represents the beginning of a new paragraph.
    """
    
    bullet: Optional[Bullet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullet') }})
    style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    
