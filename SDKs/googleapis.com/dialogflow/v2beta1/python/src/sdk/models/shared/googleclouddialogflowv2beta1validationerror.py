from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ValidationError:
    entries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    severity: Optional[GoogleCloudDialogflowV2beta1ValidationErrorSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
