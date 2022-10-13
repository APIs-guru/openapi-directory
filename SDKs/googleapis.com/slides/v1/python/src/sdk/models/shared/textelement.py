from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autotext
from . import paragraphmarker
from . import textrun


@dataclass_json
@dataclass
class TextElement:
    auto_text: Optional[autotext.AutoText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoText' }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    paragraph_marker: Optional[paragraphmarker.ParagraphMarker] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphMarker' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    text_run: Optional[textrun.TextRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRun' }})
    
