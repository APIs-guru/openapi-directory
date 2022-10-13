from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    synonyms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synonyms' }})
    
