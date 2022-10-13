from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class PatientAuthRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclass
class PatientAuthRequester:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: PatientAuthRequesterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
