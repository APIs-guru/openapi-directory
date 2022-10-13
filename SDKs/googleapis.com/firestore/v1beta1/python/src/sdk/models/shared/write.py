from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import precondition
from . import documenttransform
from . import document
from . import documentmask
from . import fieldtransform


@dataclass_json
@dataclass
class Write:
    current_document: Optional[precondition.Precondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentDocument' }})
    delete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    transform: Optional[documenttransform.DocumentTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    update: Optional[document.Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    update_mask: Optional[documentmask.DocumentMask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    update_transforms: Optional[List[fieldtransform.FieldTransform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTransforms' }})
    
