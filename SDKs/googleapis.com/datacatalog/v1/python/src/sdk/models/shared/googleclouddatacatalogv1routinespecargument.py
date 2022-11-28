from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    IN = "IN"
    OUT = "OUT"
    INOUT = "INOUT"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1RoutineSpecArgument:
    r"""GoogleCloudDatacatalogV1RoutineSpecArgument
    Input or output argument of a function or stored procedure.
    """
    
    mode: Optional[GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
