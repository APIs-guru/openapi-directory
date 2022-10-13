from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldmetadata

class MiscKeywordTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    OUTLOOK_BILLING_INFORMATION = "OUTLOOK_BILLING_INFORMATION"
    OUTLOOK_DIRECTORY_SERVER = "OUTLOOK_DIRECTORY_SERVER"
    OUTLOOK_KEYWORD = "OUTLOOK_KEYWORD"
    OUTLOOK_MILEAGE = "OUTLOOK_MILEAGE"
    OUTLOOK_PRIORITY = "OUTLOOK_PRIORITY"
    OUTLOOK_SENSITIVITY = "OUTLOOK_SENSITIVITY"
    OUTLOOK_SUBJECT = "OUTLOOK_SUBJECT"
    OUTLOOK_USER = "OUTLOOK_USER"
    HOME = "HOME"
    WORK = "WORK"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class MiscKeyword:
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedType' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    type: Optional[MiscKeywordTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
