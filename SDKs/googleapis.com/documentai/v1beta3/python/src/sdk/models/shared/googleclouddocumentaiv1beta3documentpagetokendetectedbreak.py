from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SPACE = "SPACE"
    WIDE_SPACE = "WIDE_SPACE"
    HYPHEN = "HYPHEN"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak:
    type: Optional[GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreakTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
