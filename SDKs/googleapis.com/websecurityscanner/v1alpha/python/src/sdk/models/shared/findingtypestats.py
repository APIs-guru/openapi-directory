from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FindingTypeStatsFindingTypeEnum(str, Enum):
    FINDING_TYPE_UNSPECIFIED = "FINDING_TYPE_UNSPECIFIED"
    MIXED_CONTENT = "MIXED_CONTENT"
    OUTDATED_LIBRARY = "OUTDATED_LIBRARY"
    ROSETTA_FLASH = "ROSETTA_FLASH"
    XSS_CALLBACK = "XSS_CALLBACK"
    XSS_ERROR = "XSS_ERROR"
    CLEAR_TEXT_PASSWORD = "CLEAR_TEXT_PASSWORD"
    INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE"
    XSS_ANGULAR_CALLBACK = "XSS_ANGULAR_CALLBACK"
    INVALID_HEADER = "INVALID_HEADER"
    MISSPELLED_SECURITY_HEADER_NAME = "MISSPELLED_SECURITY_HEADER_NAME"
    MISMATCHING_SECURITY_HEADER_VALUES = "MISMATCHING_SECURITY_HEADER_VALUES"


@dataclass_json
@dataclass
class FindingTypeStats:
    finding_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingCount' }})
    finding_type: Optional[FindingTypeStatsFindingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingType' }})
    
