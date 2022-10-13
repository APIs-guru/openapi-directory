from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotationstore


@dataclass_json
@dataclass
class ListAnnotationStoresResponse:
    annotation_stores: Optional[List[annotationstore.AnnotationStore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationStores' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
