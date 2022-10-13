from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import v2model


@dataclass_json
@dataclass
class ClassificationModelOptions:
    v1_model: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v1Model' }})
    v2_model: Optional[v2model.V2Model] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2Model' }})
    
