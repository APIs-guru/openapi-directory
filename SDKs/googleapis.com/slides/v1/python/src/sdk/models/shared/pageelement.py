from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import group
from . import image
from . import line
from . import shape
from . import sheetschart
from . import size
from . import table
from . import affinetransform
from . import video
from . import wordart


@dataclass_json
@dataclass
class PageElement:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    element_group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementGroup' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    line: Optional[line.Line] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    shape: Optional[shape.Shape] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shape' }})
    sheets_chart: Optional[sheetschart.SheetsChart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetsChart' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    table: Optional[table.Table] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    transform: Optional[affinetransform.AffineTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    video: Optional[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    word_art: Optional[wordart.WordArt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wordArt' }})
    
