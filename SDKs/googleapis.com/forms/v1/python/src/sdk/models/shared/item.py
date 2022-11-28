from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemInput:
    r"""ItemInput
    A single item of the form. `kind` defines which kind of item it is.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image_item: Optional[ImageItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageItem') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    page_break_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakItem') }})
    question_group_item: Optional[QuestionGroupItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionGroupItem') }})
    question_item: Optional[QuestionItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionItem') }})
    text_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textItem') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_item: Optional[VideoItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoItem') }})
    

@dataclass_json
@dataclass
class Item:
    r"""Item
    A single item of the form. `kind` defines which kind of item it is.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image_item: Optional[ImageItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageItem') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    page_break_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakItem') }})
    question_group_item: Optional[QuestionGroupItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionGroupItem') }})
    question_item: Optional[QuestionItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionItem') }})
    text_item: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textItem') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_item: Optional[VideoItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoItem') }})
    
