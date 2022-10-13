from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceconfig


@dataclass_json
@dataclass
class ListInstanceConfigsResponse:
    instance_configs: Optional[List[instanceconfig.InstanceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
