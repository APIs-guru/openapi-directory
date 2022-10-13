from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestConfig:
    flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow' }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    tracking_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingParameters' }})
    
