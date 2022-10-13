from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import browser


@dataclass_json
@dataclass
class BrowsersListResponse:
    browsers: Optional[List[browser.Browser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browsers' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
