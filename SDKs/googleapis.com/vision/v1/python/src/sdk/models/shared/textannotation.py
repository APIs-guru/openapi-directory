from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextAnnotation:
    r"""TextAnnotation
    TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
    """
    
    pages: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
