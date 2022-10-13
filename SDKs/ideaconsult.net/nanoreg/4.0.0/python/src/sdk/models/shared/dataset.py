from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dataset:
    data_entry: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataEntry' }})
    feature: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feature' }})
    model_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model_uri' }})
    query: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
