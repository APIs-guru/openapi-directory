from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageMatrix:
    cols: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cols' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
