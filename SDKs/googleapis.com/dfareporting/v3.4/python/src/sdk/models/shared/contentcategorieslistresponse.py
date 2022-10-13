from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contentcategory


@dataclass_json
@dataclass
class ContentCategoriesListResponse:
    content_categories: Optional[List[contentcategory.ContentCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCategories' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
