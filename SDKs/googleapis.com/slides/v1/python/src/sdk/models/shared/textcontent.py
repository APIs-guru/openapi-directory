from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextContent:
    r"""TextContent
    The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
    """
    
    lists: Optional[dict[str, List]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    text_elements: Optional[List[TextElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textElements') }})
    
