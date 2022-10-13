from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature


@dataclass_json
@dataclass
class ListFeaturesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[feature.Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
