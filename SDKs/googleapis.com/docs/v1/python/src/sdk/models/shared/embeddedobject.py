from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmbeddedObject:
    r"""EmbeddedObject
    An embedded object in the document.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    embedded_drawing_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedDrawingProperties') }})
    embedded_object_border: Optional[EmbeddedObjectBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedObjectBorder') }})
    image_properties: Optional[ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageProperties') }})
    linked_content_reference: Optional[LinkedContentReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedContentReference') }})
    margin_bottom: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginBottom') }})
    margin_left: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginLeft') }})
    margin_right: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginRight') }})
    margin_top: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginTop') }})
    size: Optional[Size] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
