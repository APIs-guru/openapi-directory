from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WidgetMarkup:
    r"""WidgetMarkup
    A widget is a UI element that presents texts, images, etc.
    """
    
    buttons: Optional[List[Button]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    key_value: Optional[KeyValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    text_paragraph: Optional[TextParagraph] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textParagraph') }})
    
