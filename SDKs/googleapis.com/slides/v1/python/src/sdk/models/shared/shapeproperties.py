from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autofit
from . import link
from . import outline
from . import shadow
from . import shapebackgroundfill

class ShapePropertiesContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class ShapeProperties:
    autofit: Optional[autofit.Autofit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autofit' }})
    content_alignment: Optional[ShapePropertiesContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAlignment' }})
    link: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    outline: Optional[outline.Outline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline' }})
    shadow: Optional[shadow.Shadow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow' }})
    shape_background_fill: Optional[shapebackgroundfill.ShapeBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shapeBackgroundFill' }})
    
