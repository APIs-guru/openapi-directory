from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customtemplate


@dataclass_json
@dataclass
class ListTemplatesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    template: Optional[List[customtemplate.CustomTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
