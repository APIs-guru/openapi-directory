from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DocumentBoilerplateHandlingEnum(str, Enum):
    BOILERPLATE_HANDLING_UNSPECIFIED = "BOILERPLATE_HANDLING_UNSPECIFIED"
    SKIP_BOILERPLATE = "SKIP_BOILERPLATE"
    KEEP_BOILERPLATE = "KEEP_BOILERPLATE"

class DocumentTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PLAIN_TEXT = "PLAIN_TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class Document:
    boilerplate_handling: Optional[DocumentBoilerplateHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boilerplateHandling' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    gcs_content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsContentUri' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    reference_web_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceWebUri' }})
    type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
