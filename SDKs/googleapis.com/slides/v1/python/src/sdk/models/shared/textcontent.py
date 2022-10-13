from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import list
from . import textelement


@dataclass_json
@dataclass
class TextContent:
    lists: Optional[dict[str, list.List]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lists' }})
    text_elements: Optional[List[textelement.TextElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textElements' }})
    
