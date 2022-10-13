from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class LabelList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
