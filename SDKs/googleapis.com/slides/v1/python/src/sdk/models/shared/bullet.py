from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Bullet:
    r"""Bullet
    Describes the bullet of a paragraph.
    """
    
    bullet_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletStyle') }})
    glyph: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyph') }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listId') }})
    nesting_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestingLevel') }})
    
