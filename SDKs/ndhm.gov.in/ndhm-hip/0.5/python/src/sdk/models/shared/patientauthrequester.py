from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientAuthRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclass
class PatientAuthRequester:
    r"""PatientAuthRequester
    identification of requester
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PatientAuthRequesterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
