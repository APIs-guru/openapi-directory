from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectborder
from . import imageproperties
from . import linkedcontentreference
from . import dimension
from . import dimension
from . import dimension
from . import dimension
from . import size


@dataclass_json
@dataclass
class EmbeddedObject:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    embedded_drawing_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedDrawingProperties' }})
    embedded_object_border: Optional[embeddedobjectborder.EmbeddedObjectBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObjectBorder' }})
    image_properties: Optional[imageproperties.ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageProperties' }})
    linked_content_reference: Optional[linkedcontentreference.LinkedContentReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedContentReference' }})
    margin_bottom: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginBottom' }})
    margin_left: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginLeft' }})
    margin_right: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginRight' }})
    margin_top: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marginTop' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
