from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeconfig


@dataclass_json
@dataclass
class ListConfigsResponse:
    configs: Optional[List[runtimeconfig.RuntimeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
