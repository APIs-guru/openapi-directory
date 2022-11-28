from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Symptom
    A Symptom instance.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    symptom_type: Optional[SymptomSymptomTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symptomType') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerId') }})
    
