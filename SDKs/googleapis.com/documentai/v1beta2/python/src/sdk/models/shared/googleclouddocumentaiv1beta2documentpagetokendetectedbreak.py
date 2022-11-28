from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SPACE = "SPACE"
    WIDE_SPACE = "WIDE_SPACE"
    HYPHEN = "HYPHEN"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak:
    r"""GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak
    Detected break at the end of a Token.
    """
    
    type: Optional[GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreakTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
