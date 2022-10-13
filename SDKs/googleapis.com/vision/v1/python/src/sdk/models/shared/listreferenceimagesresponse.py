from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import referenceimage


@dataclass_json
@dataclass
class ListReferenceImagesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    reference_images: Optional[List[referenceimage.ReferenceImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceImages' }})
    
