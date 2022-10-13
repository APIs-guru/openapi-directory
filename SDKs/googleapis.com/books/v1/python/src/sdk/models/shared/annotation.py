from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange


@dataclass_json
@dataclass
class AnnotationClientVersionRanges:
    cfi_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cfiRange' }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentVersion' }})
    gb_image_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbImageRange' }})
    gb_text_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbTextRange' }})
    image_cfi_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageCfiRange' }})
    

@dataclass_json
@dataclass
class AnnotationCurrentVersionRanges:
    cfi_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cfiRange' }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentVersion' }})
    gb_image_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbImageRange' }})
    gb_text_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbTextRange' }})
    image_cfi_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageCfiRange' }})
    

@dataclass_json
@dataclass
class AnnotationLayerSummary:
    allowed_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedCharacterCount' }})
    limit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitType' }})
    remaining_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCharacterCount' }})
    

@dataclass_json
@dataclass
class Annotation:
    after_selected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterSelectedText' }})
    before_selected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeSelectedText' }})
    client_version_ranges: Optional[AnnotationClientVersionRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersionRanges' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    current_version_ranges: Optional[AnnotationCurrentVersionRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentVersionRanges' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    highlight_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlightStyle' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerId' }})
    layer_summary: Optional[AnnotationLayerSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerSummary' }})
    page_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageIds' }})
    selected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedText' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
