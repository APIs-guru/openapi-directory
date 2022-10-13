from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GcsDestinationContentStructureEnum(str, Enum):
    CONTENT_STRUCTURE_UNSPECIFIED = "CONTENT_STRUCTURE_UNSPECIFIED"
    MESSAGE_JSON = "MESSAGE_JSON"

class GcsDestinationMessageViewEnum(str, Enum):
    MESSAGE_VIEW_UNSPECIFIED = "MESSAGE_VIEW_UNSPECIFIED"
    RAW_ONLY = "RAW_ONLY"
    PARSED_ONLY = "PARSED_ONLY"
    FULL = "FULL"
    SCHEMATIZED_ONLY = "SCHEMATIZED_ONLY"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class GcsDestination:
    content_structure: Optional[GcsDestinationContentStructureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentStructure' }})
    message_view: Optional[GcsDestinationMessageViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageView' }})
    uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uriPrefix' }})
    
