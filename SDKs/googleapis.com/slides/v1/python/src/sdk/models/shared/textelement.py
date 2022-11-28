from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextElement:
    r"""TextElement
    A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
    """
    
    auto_text: Optional[AutoText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoText') }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    paragraph_marker: Optional[ParagraphMarker] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphMarker') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    text_run: Optional[TextRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRun') }})
    
