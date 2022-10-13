from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImageConfigTextRedactionModeEnum(str, Enum):
    TEXT_REDACTION_MODE_UNSPECIFIED = "TEXT_REDACTION_MODE_UNSPECIFIED"
    REDACT_ALL_TEXT = "REDACT_ALL_TEXT"
    REDACT_SENSITIVE_TEXT = "REDACT_SENSITIVE_TEXT"
    REDACT_NO_TEXT = "REDACT_NO_TEXT"


@dataclass_json
@dataclass
class ImageConfig:
    text_redaction_mode: Optional[ImageConfigTextRedactionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textRedactionMode' }})
    
