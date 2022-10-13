from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentParameter:
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityType' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isList' }})
    redact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redact' }})
    
