from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldtransform


@dataclass_json
@dataclass
class DocumentTransform:
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    field_transforms: Optional[List[fieldtransform.FieldTransform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldTransforms' }})
    
