from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CounterStructuredNameOriginEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class CounterStructuredNamePortionEnum(str, Enum):
    ALL = "ALL"
    KEY = "KEY"
    VALUE = "VALUE"


@dataclass_json
@dataclass
class CounterStructuredName:
    component_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentStepName' }})
    execution_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStepName' }})
    input_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputIndex' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origin: Optional[CounterStructuredNameOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    origin_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originNamespace' }})
    original_requesting_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalRequestingStepName' }})
    original_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalStepName' }})
    portion: Optional[CounterStructuredNamePortionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portion' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
