from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VolumeannotationContentRanges:
    r"""VolumeannotationContentRanges
    The content ranges to identify the selected text.
    """
    
    cfi_range: Optional[BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfiRange') }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    gb_image_range: Optional[BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbImageRange') }})
    gb_text_range: Optional[BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbTextRange') }})
    

@dataclass_json
@dataclass
class Volumeannotation:
    annotation_data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationDataId') }})
    annotation_data_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationDataLink') }})
    annotation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    content_ranges: Optional[VolumeannotationContentRanges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRanges') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    page_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageIds') }})
    selected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedText') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
