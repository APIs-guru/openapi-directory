from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pretargetingconfig


@dataclass_json
@dataclass
class ListPretargetingConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    pretargeting_configs: Optional[List[pretargetingconfig.PretargetingConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pretargetingConfigs' }})
    
