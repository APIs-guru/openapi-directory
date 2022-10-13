from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import imageitem
from . import questiongroupitem
from . import questionitem
from . import videoitem


@dataclass_json
@dataclass
class Item:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    image_item: Optional[imageitem.ImageItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageItem' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    page_break_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageBreakItem' }})
    question_group_item: Optional[questiongroupitem.QuestionGroupItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionGroupItem' }})
    question_item: Optional[questionitem.QuestionItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionItem' }})
    text_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textItem' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    video_item: Optional[videoitem.VideoItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoItem' }})
    
