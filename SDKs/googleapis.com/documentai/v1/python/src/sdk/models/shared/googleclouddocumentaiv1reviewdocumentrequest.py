from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentschema
from . import googleclouddocumentaiv1document

class GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum(str, Enum):
    DEFAULT = "DEFAULT"
    URGENT = "URGENT"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ReviewDocumentRequest:
    document_schema: Optional[googleclouddocumentaiv1documentschema.GoogleCloudDocumentaiV1DocumentSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSchema' }})
    enable_schema_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSchemaValidation' }})
    inline_document: Optional[googleclouddocumentaiv1document.GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineDocument' }})
    priority: Optional[GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    
