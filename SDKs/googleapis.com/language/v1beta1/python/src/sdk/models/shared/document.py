from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DocumentTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PLAIN_TEXT = "PLAIN_TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class Document:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    gcs_content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsContentUri' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
