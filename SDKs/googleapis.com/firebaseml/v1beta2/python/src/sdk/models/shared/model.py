from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import operation
from . import modelstate
from . import tflitemodel


@dataclass_json
@dataclass
class Model:
    active_operations: Optional[List[operation.Operation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeOperations' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    model_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelHash' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[modelstate.ModelState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tflite_model: Optional[tflitemodel.TfLiteModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tfliteModel' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
