from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import uploaditemref

class ItemContentContentFormatEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    HTML = "HTML"
    TEXT = "TEXT"
    RAW = "RAW"


@dataclass_json
@dataclass
class ItemContent:
    content_data_ref: Optional[uploaditemref.UploadItemRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDataRef' }})
    content_format: Optional[ItemContentContentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentFormat' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    inline_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineContent' }})
    
