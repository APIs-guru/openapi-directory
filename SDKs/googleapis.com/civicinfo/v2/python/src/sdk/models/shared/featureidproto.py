from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FeatureIDProto:
    cell_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellId' }})
    fprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fprint' }})
    temporary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryData' }})
    
