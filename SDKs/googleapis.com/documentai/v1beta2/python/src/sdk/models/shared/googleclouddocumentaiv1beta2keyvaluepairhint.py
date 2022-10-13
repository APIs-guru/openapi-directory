from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2KeyValuePairHint:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueTypes' }})
    
