from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaRemoveControlRequest:
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlId' }})
    
