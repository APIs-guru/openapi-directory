from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteParagraphBulletsRequest:
    r"""DeleteParagraphBulletsRequest
    Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
    """
    
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
