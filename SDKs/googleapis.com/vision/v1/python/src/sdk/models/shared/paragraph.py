from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Paragraph:
    r"""Paragraph
    Structural unit of text representing a number of words in certain order.
    """
    
    bounding_box: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    property: Optional[TextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    words: Optional[List[Word]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
