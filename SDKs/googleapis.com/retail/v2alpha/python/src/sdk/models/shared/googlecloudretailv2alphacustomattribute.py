from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCustomAttribute:
    indexable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexable' }})
    numbers: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numbers' }})
    searchable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchable' }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
