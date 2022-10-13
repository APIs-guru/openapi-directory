from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reusableconfig


@dataclass_json
@dataclass
class ListReusableConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reusable_configs: Optional[List[reusableconfig.ReusableConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reusableConfigs' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
