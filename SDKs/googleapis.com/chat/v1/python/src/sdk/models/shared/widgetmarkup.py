from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import button
from . import image
from . import keyvalue
from . import textparagraph


@dataclass_json
@dataclass
class WidgetMarkup:
    buttons: Optional[List[button.Button]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    key_value: Optional[keyvalue.KeyValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    text_paragraph: Optional[textparagraph.TextParagraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textParagraph' }})
    
