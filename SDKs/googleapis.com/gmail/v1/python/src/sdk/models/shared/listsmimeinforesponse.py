from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import smimeinfo


@dataclass_json
@dataclass
class ListSmimeInfoResponse:
    smime_info: Optional[List[smimeinfo.SmimeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smimeInfo' }})
    
