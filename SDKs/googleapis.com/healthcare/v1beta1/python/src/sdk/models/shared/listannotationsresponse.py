from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotation


@dataclass_json
@dataclass
class ListAnnotationsResponse:
    annotations: Optional[List[annotation.Annotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
