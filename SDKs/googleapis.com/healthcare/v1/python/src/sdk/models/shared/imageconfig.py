from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImageConfigTextRedactionModeEnum(str, Enum):
    TEXT_REDACTION_MODE_UNSPECIFIED = "TEXT_REDACTION_MODE_UNSPECIFIED"
    REDACT_ALL_TEXT = "REDACT_ALL_TEXT"
    REDACT_SENSITIVE_TEXT = "REDACT_SENSITIVE_TEXT"
    REDACT_NO_TEXT = "REDACT_NO_TEXT"


@dataclass_json
@dataclass
class ImageConfig:
    r"""ImageConfig
    Specifies how to handle de-identification of image pixels.
    """
    
    text_redaction_mode: Optional[ImageConfigTextRedactionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRedactionMode') }})
    
