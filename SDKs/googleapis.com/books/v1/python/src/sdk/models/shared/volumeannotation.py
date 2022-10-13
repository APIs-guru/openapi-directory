from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booksannotationsrange
from . import booksannotationsrange
from . import booksannotationsrange


@dataclass_json
@dataclass
class VolumeannotationContentRanges:
    cfi_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cfiRange' }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentVersion' }})
    gb_image_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbImageRange' }})
    gb_text_range: Optional[booksannotationsrange.BooksAnnotationsRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gbTextRange' }})
    

@dataclass_json
@dataclass
class Volumeannotation:
    annotation_data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationDataId' }})
    annotation_data_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationDataLink' }})
    annotation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    content_ranges: Optional[VolumeannotationContentRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentRanges' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerId' }})
    page_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageIds' }})
    selected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedText' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
