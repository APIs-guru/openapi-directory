from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudFunctionsV2alphaStateMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass_json
@dataclass
class GoogleCloudFunctionsV2alphaStateMessage:
    r"""GoogleCloudFunctionsV2alphaStateMessage
    Informational messages about the state of the Cloud Function or Operation.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    severity: Optional[GoogleCloudFunctionsV2alphaStateMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
