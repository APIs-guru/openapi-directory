from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SymptomSymptomTypeEnum(str, Enum):
    SYMPTOM_TYPE_UNSPECIFIED = "SYMPTOM_TYPE_UNSPECIFIED"
    LOW_MEMORY = "LOW_MEMORY"
    OUT_OF_MEMORY = "OUT_OF_MEMORY"
    EXECUTE_TIMED_OUT = "EXECUTE_TIMED_OUT"
    MESH_BUILD_FAIL = "MESH_BUILD_FAIL"
    HBM_OUT_OF_MEMORY = "HBM_OUT_OF_MEMORY"
    PROJECT_ABUSE = "PROJECT_ABUSE"


@dataclass_json
@dataclass
class Symptom:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    symptom_type: Optional[SymptomSymptomTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symptomType' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
